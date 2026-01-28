import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Use IP address as the rate-limit key
    const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    // ✅ IMPORTANT
    next();
  } catch (error) {
    console.error("Rate limit error:", error);

    // Fail open: allow request if Redis is down
    next();
  }
};

export default rateLimiter;
