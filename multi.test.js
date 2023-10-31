const multi = require('./multi');

test('multiplicar 2 * 3 es igual a 6', () => {
    expect(multi(2, 3)).toBe(6);
});

test('multiplicar  0 * 5 es igual a 0', () => {
    expect(multi(0, 5)).toBe(0);
});

test('multiplicar  -5 * 5 es igual a -25', () => {
    expect(multi(-5, -5)).toBe(25);
});

test('multiplicar  10 * -3 es igual a -30', () => {
    expect(multi(10, -3)).toBe(-30);
});

test('multiplicar 7.5 * 2 es igual a 15', () => {
    expect(multi(7.5, 2)).toBe(15);
});