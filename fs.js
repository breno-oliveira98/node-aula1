// Importando módulo nativo do Node.js, utilizando o common js
// Módulo criado para retornar o número do IPV4
const os = require('os')
const objeto = os.networkInterfaces()
const wifi = Object.keys(objeto).find(a => a.includes('Wi-Fi'))
const dados = objeto[`${wifi}`]
const ipv4 = dados.find(a => a.family === 'IPv4')

module.exports = ipv4.address;