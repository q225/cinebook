/**
 * Booking Validators
 */

const { body, param } = require('express-validator');

const initiateBookingValidator = [
  body('showId').isUUID().withMessage('Valid show ID required'),
  body('seatIds')
    .isArray({ min: 1, max: 10 })
    .withMessage('Select 1-10 seats'),
  body('seatIds.*').isUUID().withMessage('Invalid seat ID'),
];

const confirmBookingValidator = [
  param('bookingId').isUUID().withMessage('Valid booking ID required'),
  body('method').notEmpty().withMessage('Payment method required'),
  body('transactionId').notEmpty().withMessage('Transaction ID required'),
];

const cancelBookingValidator = [
  param('bookingId').isUUID().withMessage('Valid booking ID required'),
  body('reason').optional().isString(),
];

module.exports = {
  initiateBookingValidator,
  confirmBookingValidator,
  cancelBookingValidator,
};
