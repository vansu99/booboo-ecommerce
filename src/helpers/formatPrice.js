export function formatPrice(number) {
  let price = number.toString().split('').reverse();
  for (let i = 3; i < price.length; i++) {
    price.splice(i, 0, '.');
    i += 3;
  }
  return price.reverse().join('');
}

export function formatPriceUs(number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}
