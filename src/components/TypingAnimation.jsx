import React, { useState, useEffect } from "react";

const TypingAnimation = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1));
          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span className="text-purple-600 dark:text-purple-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
