import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  const handleClick = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    callback(event);
  };
  
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutside;
