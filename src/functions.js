const calculateB = (amount) => {
  return String(Math.round(amount * 0.60));
};

const calculateM = (amount) => {
  return String(Math.round(amount * 0.40));
};

export { calculateB, calculateM };
