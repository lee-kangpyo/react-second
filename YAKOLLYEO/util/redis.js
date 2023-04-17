const redis = require('redis')
const dotenv = require('dotenv');
dotenv.config();

const redisClient = redis.createClient({
    socket: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
      },
     
});


//redisClient.on('connect', () => console.log('Connected to Redis!'));
redisClient.on('error', (err) => console.log('Redis Client Error', err));

redisClient.on('connect', () => {
    console.log('Connected to Redis!!!');
    version4test() 
  });

redisClient.connect();


async function version4test() {
    await redisClient.set('key', '345');
    const data = await redisClient.get('key');
    console.log(data); // 123
}


module.exports = redisClient;