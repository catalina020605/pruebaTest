const sumar = require('./suma');

test('sumar 2 + 3 es igual a 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('sumar 0 + 0 es igual a 0', () => {
    expect(sumar(0, 0)).toBe(0);
});

test('sumar -5 + 5 es igual a 0', () => {
    expect(sumar(-5, 5)).toBe(0);
});

test('sumar 10 + -3 es igual a 7', () => {
    expect(sumar(10, -3)).toBe(7);
});

test('sumar 7.5 + 2.5 es igual a 10', () => {
    expect(sumar(7.5, 2.5)).toBe(10);
});