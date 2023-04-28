export default function discountCalculation(price, discount) {
  return price - price * (discount / 100);
}
