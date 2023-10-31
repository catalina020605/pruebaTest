const restar = require('./resta');

test('restar 10 - 5 es igual a 5', () => {
    expect(restar(10, 5)).toBe(5);
});

test('restar 0 - 0 es igual a 0', () => {
    expect(restar(0, 0)).toBe(0);
});

test('restar 10 - -3 es igual a 13', () => {
    expect(restar(10, -3)).toBe(13);
});

test('restar 7.5 - 2.5 es igual a 5', () => {
    expect(restar(7.5, 2.5)).toBe(5);
});

test('restar -5 - 5 es igual a 5', () => {
    expect(restar(-5, 5)).toBe(-10);
});