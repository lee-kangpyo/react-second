const redis = require('redis')
const dotenv = require('dotenv');
dotenv.config();

const redisClient = redis.createClient({
    socket: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
      },
      legacyMode: true,
});


//redisClient.on('connect', () => console.log('Connected to Redis!'));
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => {
    console.log('Connected to Redis!!!');
    
    redisClient.set('hello', 'world');
    redisClient.get('key', (err, value) => {
        console.log(value); // 123
    })
    redisClient.get('hello', (err, value) => {
        console.log(value); // 123
    })
  
    
  });

redisClient.connect();


module.exports = redisClient;