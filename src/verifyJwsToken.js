const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const jwk2pem = require('pem-jwk').jwk2pem;
const jwk = require('./credientals/jwk.json');

const publicKey = fs.readFileSync(path.join(__dirname, 'credientals/publicKey.pem.public'))
const jwsToken = fs.readFileSync(path.join(__dirname, 'credientals/jws/token')).toString()
function verifyJwsTokenByPublicKey(jwsToken) {
    const payload = jwt.verify(jwsToken, publicKey);
    return payload
}

function verifyJwsTokenByJwk(jwsToken) {
    const publicKeyConvertedByJwk = jwk2pem(jwk);
    const payload = jwt.verify(jwsToken, publicKeyConvertedByJwk);
    return payload
}

verifyJwsTokenByPublicKey(jwsToken);
const claims = verifyJwsTokenByJwk(jwsToken);
console.log(claims)