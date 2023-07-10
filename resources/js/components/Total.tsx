export const suma = (input: any[]): number | false => {
  if (!Array.isArray(input)) return false;

  let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      total += Number(input[i]);
    }
  }
  return total;
};
