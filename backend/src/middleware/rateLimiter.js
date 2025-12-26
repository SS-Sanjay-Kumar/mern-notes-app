import ratelimit from '../config/upstash.js';

const rateLimiter = async (req, res, next)=>{
    try {
        // since there is not auth, we are using client IP.
        // This is just a temp solution. 
        const key = req.ip;
        const {success} = await ratelimit.limit(key);
        if(!success){
            return res.status(429).json({
                message: `Too many requests, try again later!: ${key}`
            })
        }
        next()
        
    } catch (error) {
        console.log("Rate limiter Error: ", error);

        next(error);
    
    }
;}
export default rateLimiter;