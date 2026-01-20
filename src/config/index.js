/**
 * CineBook Configuration
 */

require('dotenv').config();

const config = {
  // Server
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3002,
  apiVersion: process.env.API_VERSION || 'v1',

  // JWT
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || 'cinebook-access-secret-dev',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'cinebook-refresh-secret-dev',
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  },

  // Security
  bcrypt: {
    saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) || 12,
  },

  // Booking
  booking: {
    lockDurationMinutes: parseInt(process.env.BOOKING_LOCK_MINUTES, 10) || 10,
    maxSeatsPerBooking: parseInt(process.env.MAX_SEATS_PER_BOOKING, 10) || 10,
    convenienceFeePercent: parseFloat(process.env.CONVENIENCE_FEE_PERCENT) || 2.5,
    taxPercent: parseFloat(process.env.TAX_PERCENT) || 18,
  },

  // Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100,
  },

  // CORS
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },
};

module.exports = config;
