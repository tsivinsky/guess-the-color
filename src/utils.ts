export const getRandomColor = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

export const getRandomNumber = (min = 0, max = min + 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};
