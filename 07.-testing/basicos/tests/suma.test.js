const sumaFn = require('../suma');

const resultado = sumaFn(1, 2);
const esperado = 3;
if(resultado !== esperado) {
    throw new Error(`${resultado} es distinto de ${esperado}`);
}

console.log('Test "sumaFn" funcionando correctamente');