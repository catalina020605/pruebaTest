const division = require('./division');

test('dividir 10 / 2 es igual a 5', () => {
    expect(division(10,2)).toBe(5);
});

test('dividir 20 / 2 es igual a 10', () => {
    expect(division(20,2)).toBe(10);
});

test('dividir 40 / 2 es igual a 20', () => {
    expect(division(40,2)).toBe(20);
});

test('dividir 50 / 2 es igual a 25', () => {
    expect(division(50,2)).toBe(25);
});

test('dividir 100 / 2 es igual a 50', () => {
    expect(division(100,2)).toBe(50);
});
