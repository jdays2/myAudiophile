export const calculateTotal = (cart) => {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.counter;
  }
  return total;
}