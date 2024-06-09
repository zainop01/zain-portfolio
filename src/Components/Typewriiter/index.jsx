import { useState, useEffect } from 'react';

const useTypewriter = (words, loop = true, typingSpeed = 150, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      let updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingSpeedDelay = isDeleting ? typingSpeed / 2 : typingSpeed;
    const timeout = setTimeout(handleTyping, typingSpeedDelay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, words, wordIndex, typingSpeed, pauseTime]);

  return text;
};

export default useTypewriter;
