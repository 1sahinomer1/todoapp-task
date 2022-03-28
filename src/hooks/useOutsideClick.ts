import { useEffect, useState } from 'react';

function useClickOutside(ref: any) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event: any) {
      console.log(event.target);
      if (
        event.target.nodeName !== 'BUTTON' &&
        event.target.nodeName !== 'I' &&
        isActive &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsActive(!isActive);
      }
    }
    // Bind
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, isActive, setIsActive]);
  return [isActive, setIsActive] as const;
}

export default useClickOutside;
