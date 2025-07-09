import { useState } from 'react';

const useToggle = (initialValue = true) => {
  const [visible, setVisible] = useState(initialValue);
  const toggleVisibility = () => setVisible(prev => !prev);
  return [visible, toggleVisibility];
};

export default useToggle;