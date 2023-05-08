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
  },
  refresh: () => { // refresh token 발급
    return jwt.sign({}, secret, { // refresh token은 payload 없이 발급
      algorithm: 'HS256',
      expiresIn: '14d',
    });
  },
  refreshVerify: async (token, userId) => { // refresh token 검증
    /* redis 모듈은 기본적으로 promise를 반환하지 않으므로,
       promisify를 이용하여 promise를 반환하게 해줍니다.*/
    //const getAsync = promisify(redisClient.get).bind(redisClient);
    
    try {
      const data = await getAsync(userId); // refresh token 가져오기
      if (token === data) {
        try {
          jwt.verify(token, secret);
          return true;
        } catch (err) {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
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