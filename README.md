# JSON Web Token (JWT) 
... :)

# JSON Web Signature (JWS)
JWS's claims are signed with a signature(private key) that can be verified by the server with a secret signing key(public key ).
This ensures that the claims have not been tampered with when passed between client and server. The contents of the JWS token are Base64 encoded and not encrypted. Use JWS only when you want to exchange nonsensitive data in the claim or in the payload of the token.

A JWS is used to sign the data, making it integrity-protected:
 - The rogue client or Man-in-the-middle can see the data as its base 64 encoded.
 - If the rogue client or Man-in-the-middle tries to modify, the signature verification would fail. The server will validate the signature of the message to ensure that the claims were not tampered with by the client. If the server detects any kind of tampering, it can take appropriate action (deny the request or block the client, etc.).

# JSON Web Key (JWK)
The JSON Web Key Set (JWKS) is a set of keys which contains the public keys used to verify any JSON Web Token (JWT) issued by the authorization server and signed using the RS256 signing algorithm.

The JWK format allows the key to be decorated with metadata. An important piece of metadata is the key ID (“kid”), for key identification in databases and enabling key rollover. The usage parameter (“use”) indicates the key’s intended purpose — signing or encryption

# JSON Web Encryption (JWE) - DOING
The JWE scheme encrypts the content instead of signing it. The content being encrypted here are JWT claims. JWE, thus brings Confidentiality. The JWE can be signed and enclosed in a JWS. Now, you get both encryption and signature (thus getting Confidentiality, Integrity, Authentication).

JWE is used to encrypt the data as well as make it integrity-protected:

 - The rogue client or Man-in-the-middle cannot see the data as its encrypted with a secret key.
 - If the rogue client or Man-in-the-middle modify the payload , the signature verification would fail and the server will reject if found invalidate the signature.
 - Man-in-the-middle attacks cannot modify it, since the verification would fail