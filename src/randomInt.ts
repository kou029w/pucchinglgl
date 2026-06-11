const { floor, random } = Math;

function randomInt(high: number) {
  return floor(random() * (high + 1));
}

export default randomInt;
