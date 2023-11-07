const area = require ('./area');

test('el area entre 8 y 4 es igual a 16', () => {
    expect(area(8, 4)).toBe(32);
});

test('el area entre 10 y 6 es igual a 30', () => {
    expect(area(10, 6)).toBe(30);
});

test('el area entre 12 y 8 es igual a 48', () => {
    expect(area(12, 8)).toBe(48);
});

test('el area entre 5 y 7 es igual a 17.5', () => {
    expect(area(5, 7)).toBe(17.5);
});

test('el area entre 3 y 9 es igual a 13.5', () => {
    expect(area(3, 9)).toBe(13.5);
});