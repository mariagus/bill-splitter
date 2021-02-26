const calculateB = (amount) => {
  return String(Math.round(amount * 0.6));
};

const calculateM = (amount) => {
  return String(Math.round(amount * 0.4));
};

export { calculateB, calculateM };
