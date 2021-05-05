const calculateB = (amount) => {
  return String(Math.round(amount * 0.616));
};

const calculateM = (amount) => {
  return String(Math.round(amount * 0.384));
};

export { calculateB, calculateM };
