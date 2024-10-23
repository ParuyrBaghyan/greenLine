import React, { useEffect, useRef, useState, useCallback } from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClickOutside?(e: MouseEvent): void;
  onHoverOutside?(e: MouseEvent): void;  // New prop for hover detection
}

const ClickOutside: React.FC<IProps> = ({
  children,
  className,
  onClickOutside,
  onHoverOutside,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [largestChild, setLargestChild] = useState<HTMLElement | null>(null);

  const findLargestChild = useCallback(() => {
    if (containerRef.current) {
      const childElements = Array.from(
        containerRef.current.children
      ) as HTMLElement[];
      let largest: HTMLElement | null = null;
      let maxSize = 0;

      childElements.forEach((child) => {
        const size = child.clientWidth * child.clientHeight; // Area of the element
        if (size > maxSize) {
          maxSize = size;
          largest = child;
        }
      });

      setLargestChild(largest);
    }
  }, []);

  // Use ResizeObserver to track size changes of children
  useEffect(() => {
    const observer = new ResizeObserver(findLargestChild);
    if (containerRef.current) {
      const childElements = Array.from(containerRef.current.children);
      childElements.forEach((child) => observer.observe(child as HTMLElement));
    }

    return () => {
      observer.disconnect();
    };
  }, [findLargestChild]);

  // Handle click outside the largest child
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        largestChild &&
        !largestChild.contains(e.target as Node) &&
        onClickOutside
      ) {
        onClickOutside(e);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [largestChild, onClickOutside]);

  // Handle hover outside the largest child
  useEffect(() => {
    const handleMouseOverOutside = (e: MouseEvent) => {
      if (
        largestChild &&
        !largestChild.contains(e.target as Node) &&
        onHoverOutside
      ) {
        onHoverOutside(e);
      }
    };

    document.addEventListener("mouseover", handleMouseOverOutside, true);

    return () => {
      document.removeEventListener("mouseover", handleMouseOverOutside, true);
    };
  }, [largestChild, onHoverOutside]);

  return (
    <div className={className} ref={containerRef} {...props}>
      {children}
    </div>
  );
};

export default ClickOutside;
