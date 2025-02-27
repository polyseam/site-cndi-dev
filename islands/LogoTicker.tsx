import { useEffect, useRef, useState } from "preact/hooks";
import { ComponentChildren, toChildArray } from "preact";

import { FullWidthSection } from "components/Section.tsx";

interface LogoTickerProps {
  children: ComponentChildren;
  speed?: number;
  direction?: "left" | "right";
}

export default function LogoTicker(props: LogoTickerProps) {
  const speed = props?.speed || 50;
  const direction = props?.direction || "left";
  const children = toChildArray(props.children);

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [keyframes, setKeyframes] = useState("");

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
      }
    };

    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      const newKeyframes = `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${containerWidth / 2}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-${containerWidth / 2}px); }
          100% { transform: translateX(0); }
        }
      `;
      setKeyframes(newKeyframes);
    }
  }, [containerWidth]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const duration = containerWidth / 2 / speed;

  return (
    <FullWidthSection>
      <div
        ref={containerRef}
        className="flex bg-midpurp overflow-hidden h-[20vh]"
      >
        <div
          className="flex flex-col justify-center"
          style={{
            animation: `scroll${
              direction === "left" ? "Left" : "Right"
            } ${duration}s linear infinite`,
            animationPlayState: isVisible ? "running" : "paused",
            willChange: "transform",
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="flex">
              {child}
            </div>
          ))}
        </div>
        <style jsx>{keyframes}</style>
      </div>
    </FullWidthSection>
  );
}
