const calculateB = (amount) => {
  return String(Math.round(amount * 0.597));
};

const calculateM = (amount) => {
  return String(Math.round(amount * 0.403));
};

export { calculateB, calculateM };
