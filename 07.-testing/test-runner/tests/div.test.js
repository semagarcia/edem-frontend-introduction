const divFn = require('../div');

test('should divide integer numbers', () => {
    const resultado = divFn(6, 3);
    expect(resultado).toBe(2);
});