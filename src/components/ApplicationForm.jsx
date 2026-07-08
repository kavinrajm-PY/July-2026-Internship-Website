import React, { useState } from 'react';

// Deployed Google Apps Script Web App URL from the user
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxQitFnQIn7CIpGq3uSYIYMpcxUJ1YaQsOCzA_FSvi55phw15S-jjIJv3OwYzZtQD6b/exec';

export default function ApplicationForm({ onBack }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    collegeName: '',
    degreeCourse: '',
    yearOfStudy: '',
    primarySkills: '',
    testingKnowledge: '',
    github: '',
    linkedin: '',
    motivation: '',
    officeWillingness: '',
    internshipDuration: '',
    resumeFile: null,
    resumeBase64: '',
    resumeName: '',
    declaration: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setErrors((prev) => ({ ...prev, resume: 'Please upload a PDF file only.' }));
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resume: 'File size must be less than 10MB.' }));
      return;
    }

    setErrors((prev) => ({ ...prev, resume: '' }));
    
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      setFormData((prev) => ({
        ...prev,
        resumeFile: file,
        resumeName: file.name,
        resumeBase64: base64String,
      }));
    };
    reader.readAsDataURL(file);
  };

  const validateStep = (step) => {
    const stepErrors = {};
    if (step === 1) {
      if (!formData.fullName.trim()) stepErrors.fullName = 'Full Name is required.';
      if (!formData.email.trim()) {
        stepErrors.email = 'Email Address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.mobileNumber.trim()) {
        stepErrors.mobileNumber = 'Mobile Number is required.';
      } else if (!/^[0-9\s+-]{10,15}$/.test(formData.mobileNumber.replace(/\s/g, ''))) {
        stepErrors.mobileNumber = 'Please enter a valid mobile number.';
      }
    } else if (step === 2) {
      if (!formData.collegeName.trim()) stepErrors.collegeName = 'College Name is required.';
      if (!formData.degreeCourse.trim()) stepErrors.degreeCourse = 'Degree/Course is required.';
      if (!formData.yearOfStudy) stepErrors.yearOfStudy = 'Please select your current year of study.';
      if (!formData.primarySkills.trim()) stepErrors.primarySkills = 'Please list your development skills.';
      if (!formData.testingKnowledge) stepErrors.testingKnowledge = 'Please answer this question.';
    } else if (step === 3) {
      if (!formData.motivation.trim()) stepErrors.motivation = 'Please share your motivation.';
      if (!formData.officeWillingness) stepErrors.officeWillingness = 'Please answer this question.';
      if (!formData.internshipDuration) stepErrors.internshipDuration = 'Please select a duration.';
      if (!formData.resumeBase64) stepErrors.resume = 'Please upload your resume in PDF format.';
      if (!formData.declaration) stepErrors.declaration = 'You must declare the information is correct.';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          collegeName: formData.collegeName,
          degreeCourse: formData.degreeCourse,
          yearOfStudy: formData.yearOfStudy,
          primarySkills: formData.primarySkills,
          testingKnowledge: formData.testingKnowledge,
          github: formData.github,
          linkedin: formData.linkedin,
          motivation: formData.motivation,
          officeWillingness: formData.officeWillingness,
          internshipDuration: formData.internshipDuration,
          resumeName: formData.resumeName,
          resumeBase64: formData.resumeBase64,
          timestamp: new Date().toLocaleString(),
        }),
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred during submission. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section className="section form-section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div className="success-icon-wrapper">✓</div>
          <h2 className="section-title-large" style={{ marginBottom: '16px' }}>Application Submitted!</h2>
          <p className="success-message">
            Thank you for applying to the Praskla Technology SDE Internship Program.
            Your application has been logged directly to our Google Sheets portal.
          </p>
          <p className="success-submessage" style={{ margin: '16px 0 32px', color: '#666' }}>
            We will carefully review your details and resume. Shortlisted candidates will be contacted via email or mobile.
          </p>
          <button className="btn-brand-primary" onClick={onBack}>
            Back to Home Page
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section form-section">
      <div className="container" style={{ maxWidth: '700px' }}>
        {/* Back Link */}
        <button className="back-link-btn" onClick={onBack}>
          ← Back to Internship Details
        </button>

        <div className="form-card">
          <div className="form-card-header">
            <span className="section-eyebrow-accent">CANDIDATE REGISTRATION</span>
            <h2 className="form-title">Student Registration Form</h2>
            <p className="form-subtitle-text">
              Please fill in all details carefully. The information provided will be used 
              to assess your technical skills and project placement compatibility.
            </p>
            
            {/* Design-rich Stepper Progress Bar */}
            <div className="progress-steps-bar">
              <div className={`step-indicator ${currentStep >= 1 ? 'active' : ''}`}>
                <span className="step-num-icon">1</span> Personal Details
              </div>
              <div className={`step-line ${currentStep >= 2 ? 'active' : ''}`}></div>
              <div className={`step-indicator ${currentStep >= 2 ? 'active' : ''}`}>
                <span className="step-num-icon">2</span> Academic & Skills
              </div>
              <div className={`step-line ${currentStep >= 3 ? 'active' : ''}`}></div>
              <div className={`step-indicator ${currentStep >= 3 ? 'active' : ''}`}>
                <span className="step-num-icon">3</span> Commitment & PDF
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-element">
            {/* STEP 1: Personal Information */}
            {currentStep === 1 && (
              <div className="form-step-content">
                <h3 className="step-title">Personal Details</h3>
                
                {/* 1. Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="required-label">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? 'error-input' : ''}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                {/* 2. Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="required-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error-input' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* 3. Mobile Number */}
                <div className="form-group">
                  <label htmlFor="mobileNumber" className="required-label">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter your mobile contact number"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className={errors.mobileNumber ? 'error-input' : ''}
                  />
                  {errors.mobileNumber && <span className="error-text">{errors.mobileNumber}</span>}
                </div>

                <div className="form-footer-actions">
                  <button type="button" className="btn-brand-primary" onClick={handleNext}>
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Academic & Technical Information */}
            {currentStep === 2 && (
              <div className="form-step-content">
                <h3 className="step-title">Academics & Technical Details</h3>

                {/* 4. College Name */}
                <div className="form-group">
                  <label htmlFor="collegeName" className="required-label">College Name</label>
                  <input
                    type="text"
                    id="collegeName"
                    name="collegeName"
                    placeholder="Enter your college/university name"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className={errors.collegeName ? 'error-input' : ''}
                  />
                  {errors.collegeName && <span className="error-text">{errors.collegeName}</span>}
                </div>

                {/* 5. Degree / Course */}
                <div className="form-group">
                  <label htmlFor="degreeCourse" className="required-label">Degree / Course</label>
                  <input
                    type="text"
                    id="degreeCourse"
                    name="degreeCourse"
                    placeholder="Example: B.E. CSE, B.Tech IT, BCA, MCA"
                    value={formData.degreeCourse}
                    onChange={handleInputChange}
                    className={errors.degreeCourse ? 'error-input' : ''}
                  />
                  {errors.degreeCourse && <span className="error-text">{errors.degreeCourse}</span>}
                </div>

                {/* 6. Current Year of Study */}
                <div className="form-group">
                  <label className="required-label">Current Year of Study</label>
                  <div className="radio-group">
                    {['II Year', 'III Year', 'IV Year', 'Other'].map((year) => (
                      <label key={year} className="radio-label">
                        <input
                          type="radio"
                          name="yearOfStudy"
                          value={year}
                          checked={formData.yearOfStudy === year}
                          onChange={handleInputChange}
                        />
                        <span className="radio-dot-text">{year}</span>
                      </label>
                    ))}
                  </div>
                  {errors.yearOfStudy && <span className="error-text">{errors.yearOfStudy}</span>}
                </div>

                {/* 7. Primary Development Skills */}
                <div className="form-group">
                  <label htmlFor="primarySkills" className="required-label">Primary Development Skills</label>
                  <input
                    type="text"
                    id="primarySkills"
                    name="primarySkills"
                    placeholder="Example: Java, Python, C#, JavaScript, React.js, Node.js, SQL, Flutter, etc."
                    value={formData.primarySkills}
                    onChange={handleInputChange}
                    className={errors.primarySkills ? 'error-input' : ''}
                  />
                  {errors.primarySkills && <span className="error-text">{errors.primarySkills}</span>}
                </div>

                {/* 8. Knowledge of Software Testing */}
                <div className="form-group">
                  <label className="required-label">Do you have knowledge of Software Testing?</label>
                  <div className="radio-group">
                    {['Yes', 'No', 'Currently Learning'].map((opt) => (
                      <label key={opt} className="radio-label">
                        <input
                          type="radio"
                          name="testingKnowledge"
                          value={opt}
                          checked={formData.testingKnowledge === opt}
                          onChange={handleInputChange}
                        />
                        <span className="radio-dot-text">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.testingKnowledge && <span className="error-text">{errors.testingKnowledge}</span>}
                </div>

                {/* 9. GitHub */}
                <div className="form-group">
                  <label htmlFor="github">GitHub Profile URL (Optional)</label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    placeholder="https://github.com/username"
                    value={formData.github}
                    onChange={handleInputChange}
                  />
                </div>

                {/* 10. LinkedIn */}
                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn Profile URL (Optional)</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-footer-actions dual">
                  <button type="button" className="btn-brand-secondary" onClick={handlePrev}>
                    ← Back
                  </button>
                  <button type="button" className="btn-brand-primary" onClick={handleNext}>
                    Next Step →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Commitment, Motivation, Resume & Declaration */}
            {currentStep === 3 && (
              <div className="form-step-content">
                <h3 className="step-title">Commitment, Motivation & Resume</h3>

                {/* 11. Motivation */}
                <div className="form-group">
                  <label htmlFor="motivation" className="required-label">Why do you want this opportunity at Praskla Technology?</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows="4"
                    placeholder="Describe why you want this internship and how it aligns with your career goals"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className={errors.motivation ? 'error-input' : ''}
                  ></textarea>
                  {errors.motivation && <span className="error-text">{errors.motivation}</span>}
                </div>

                {/* 12. Office Willingness */}
                <div className="form-group">
                  <label className="required-label">Are you willing to work from our office on a daily basis during the internship period?</label>
                  <div className="radio-group">
                    {['Yes', 'No'].map((opt) => (
                      <label key={opt} className="radio-label">
                        <input
                          type="radio"
                          name="officeWillingness"
                          value={opt}
                          checked={formData.officeWillingness === opt}
                          onChange={handleInputChange}
                        />
                        <span className="radio-dot-text">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.officeWillingness && <span className="error-text">{errors.officeWillingness}</span>}
                </div>

                {/* 13. Internship Duration */}
                <div className="form-group">
                  <label className="required-label">How long are you planning to continue with this internship if selected?</label>
                  <div className="radio-group">
                    {[
                      '3 Months',
                      '6 Months',
                      '1 Year',
                      'Long-Term (Based on Performance & Opportunity)'
                    ].map((opt) => (
                      <label key={opt} className="radio-label">
                        <input
                          type="radio"
                          name="internshipDuration"
                          value={opt}
                          checked={formData.internshipDuration === opt}
                          onChange={handleInputChange}
                        />
                        <span className="radio-dot-text">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.internshipDuration && <span className="error-text">{errors.internshipDuration}</span>}
                </div>

                {/* 14. Resume Upload */}
                <div className="form-group">
                  <label className="required-label">Upload Your Resume (PDF Only)</label>
                  <div className="file-upload-box">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="resume" className="file-upload-label-box">
                      <span className="upload-icon">📄</span>
                      <span className="upload-text">
                        {formData.resumeFile ? formData.resumeFile.name : 'Click to Upload Resume (PDF)'}
                      </span>
                      <span className="upload-subtext">Maximum File Size: 10 MB</span>
                    </label>
                  </div>
                  {errors.resume && <span className="error-text">{errors.resume}</span>}
                </div>

                {/* Declaration */}
                <div className="form-group declaration-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-text required-label">
                      I hereby declare that the information provided above is true and accurate to the best of my knowledge.
                    </span>
                  </label>
                  {errors.declaration && <span className="error-text">{errors.declaration}</span>}
                </div>

                <div className="form-footer-actions dual">
                  <button type="button" className="btn-brand-secondary" onClick={handlePrev} disabled={isSubmitting}>
                    ← Back
                  </button>
                  <button type="submit" className="btn-brand-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
