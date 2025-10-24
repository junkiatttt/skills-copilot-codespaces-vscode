function calculateNumbers(num1, num2) {  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num2 !== 0 ? num1 / num2 : null;

  return {
    sum,
    difference,
    product,
    quotient
  };
}