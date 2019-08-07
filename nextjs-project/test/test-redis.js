const Redis = require('ioredis')

const test = async () => {
  const redis = new Redis({
    port: 6379,
    // password: 123456
  })
  

  // await redis.set('b', '123')
  await redis.setex('c', 10, '123') // 10秒
  const keys = await redis.keys('*')
  // console.log(await redis.get('b'))
  console.log(keys)
}

test()

