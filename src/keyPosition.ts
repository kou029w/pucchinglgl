function keyPosition(
  layout: readonly string[],
  key: string
): [number, number] | [] {
  const [x, y] = layout
    .map((row) => row.split(" ").indexOf(key))
    .flatMap((x, y) => (x >= 0 ? [x, y] : []));

  return x >= 0 ? [x, y] : [];
}

export default keyPosition;
