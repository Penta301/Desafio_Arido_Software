const Logic = () => {
  const handleRef = (ref, value) => {
    ref.current = value;
  };

  return { handleRef };
};

export default Logic;
