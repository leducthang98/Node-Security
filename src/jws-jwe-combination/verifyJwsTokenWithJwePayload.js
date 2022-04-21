const jwt = require('jsonwebtoken');
const jwk2pem = require('pem-jwk').jwk2pem;
const fs = require('fs');
const path = require('path');
const jwk = require('../credientals/jwk.json');
const crypto = require('crypto')

const privateKey = fs.readFileSync(path.join(__dirname, '/../credientals/privateKey.pem.private'))
const jwsToken = fs.readFileSync(path.join(__dirname, '/../credientals/jws-with-jwe/token')).toString()

function verifyJwsTokenWithJweByJwk(jwsToken) {
    const publicKeyConvertedByJwk = jwk2pem(jwk);
    const payload = jwt.verify(jwsToken, publicKeyConvertedByJwk);
    const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(JSON.stringify(payload.payloadEncrypted), 'base64')).toString('utf8')
    return {
        ...payload,
        ...JSON.parse(decrypted)
    }
}

const claims = verifyJwsTokenWithJweByJwk(jwsToken);
console.log(claims)
