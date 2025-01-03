const fs = require('fs')

fs.readFile('modulos.js', 'utf8', (err, data) => {
    if (err) {
        return console.log('Erro:', err);
    } else {
        console.log(data);
        
    }
})