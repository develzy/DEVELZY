"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("clickable")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [isVisible]);

    if (typeof window !== "undefined" && window.innerWidth <= 768) return null;

    return (
        <>
            <div
                className={`cursor-dot ${isVisible ? "visible" : ""}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={`cursor-outline ${isVisible ? "visible" : ""} ${isHovering ? "hover" : ""}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
}
