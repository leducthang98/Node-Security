const crypto = require('crypto')
const fs = require('fs');
const path = require('path');
var pem2jwk = require('pem-jwk').pem2jwk;

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

const jwk = pem2jwk(publicKey, { kid: 'leducthang98' })

fs.writeFileSync(path.join(__dirname, 'credientals/privateKey.pem.private'), privateKey)
fs.writeFileSync(path.join(__dirname, 'credientals/publicKey.pem.public'), publicKey)
fs.writeFileSync(path.join(__dirname, 'credientals/jwk.json'), JSON.stringify(jwk))


