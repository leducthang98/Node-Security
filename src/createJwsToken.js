const jws = require('jws');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path')

const privateKey = fs.readFileSync(path.join(__dirname, 'credientals/privateKey.pem.private'))

function generateJwsToken(claims) {
    const jwsToken = jws.sign({
        header: { alg: 'HS256' },
        payload: claims,
        privateKey
    })
    return jwsToken;
}

generateJwsToken({
    sub: '123456',
    data: 'this is payload',
    role: 'admin'
})


function generateJwtTokenByPrivateKey(claims) {
    let signOptions = {
        issuer: 'leducthang98',
        subject: 'leducthang98@gmail.com',
        expiresIn: "12h",
        algorithm: "RS256",
        header: {
            kid: 'leducthang98'
        }
    };
    const jwtToken = jwt.sign(claims, privateKey, signOptions)

    return jwtToken
}

const jwtTokenGeneratedByPrivateKey = generateJwtTokenByPrivateKey({
    data: 'this is payload',
    role: 'admin'
})

fs.writeFileSync(path.join(__dirname, 'credientals/jws/token'), jwtTokenGeneratedByPrivateKey)