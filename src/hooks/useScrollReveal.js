import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed');
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useStaggerReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll('.stagger-item');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('revealed');
            }, index * (options.staggerDelay || 100));
          });
          observer.unobserve(container);
        }
      },
      {
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '0px 0px -40px 0px',
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
}
