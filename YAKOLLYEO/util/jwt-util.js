const jwt = require('jsonwebtoken');
const redisClient = require('./redis');

const secret = process.env.SECRET;

module.exports = {
  // access token 발급
  sign: (user) => { 
    const payload = { 
      id: user.id,
      name: user.name,
    };
    
    return jwt.sign(payload, secret, { 
      algorithm: 'HS256', // 암호화 알고리즘
      expiresIn: '1h', 	  // 유효기간
    });
  },

  // access token 검증
  verify: (token) => { 
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret);
      console.log(decoded)
      return {
        ok: true,
        id: decoded.id,
        name: decoded.name,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  }
};




/*
const crypto = require('crypto');
const base64URLEncode = (str) => {
  return str.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}
const generateToken = (payload, secret, expiresIn) => {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };

  const encodedHeader = base64URLEncode(JSON.stringify(header));
  const encodedPayload = base64URLEncode(JSON.stringify(payload));
  const signature = crypto
    .createHmac('sha256', secret)
    .update(encodedHeader + '.' + encodedPayload)
    .digest('base64');

  const encodedSignature = base64URLEncode(signature);

  const token = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;

  return token;
}


// 사용 예시
const payload = { id: 1234, name: 'John Doe' };
const secret2 = 'mysecret';
const token = generateToken(payload, secret2, '1h');

console.log(token);
*/