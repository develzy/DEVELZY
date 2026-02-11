"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "", delay = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("reveal-visible");
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [delay]);

    return (
        <div ref={elementRef} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
}
