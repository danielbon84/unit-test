// importar la función sum del archivo app.js
const { sum } = require('./app.js');


// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
const { eurotodollar } = require('./app.js');
test('one euro is equal 1.2 dollar', () => {
    
    let totaldollar = (eurotodollar (1));

    
    expect(totaldollar).toBe(1.2);
});

const { eurotolibra } = require('./app.js');
test('one euro is equal 0.8 libra', () => {
    
    let totallibra = (eurotolibra (1));

    
    expect(totallibra).toBe(0.8);
});
const { eurotoyen } = require('./app.js');
test('one euro is equal 127.9 yen', () => {
    
    let totalyen = (eurotoyen (1));

    
    expect(totalyen).toBe(127.9);
});
