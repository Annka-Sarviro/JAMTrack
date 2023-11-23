export const getStorageBar = () => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem('isBarOpen');
    return storedValue ? JSON.parse(storedValue) : false;
  }
  return false;
};
