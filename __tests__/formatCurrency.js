import { formatCurrency } from "../src/helpers";

describe('formatCurrency function', () => {
  test('Debe formatear 1000 a $1.000', () => {
    expect(formatCurrency(1000)).toBe('$1.000');
  });
  
  test('Debe formatear 1000000 a $1.000.000', () => {
    expect(formatCurrency(1000000)).toBe('$1.000.000');
  });
  
  test('Debe formatear 123456789 a $123.456.789', () => {
    expect(formatCurrency(123456789)).toBe('$123.456.789');
  });
});
