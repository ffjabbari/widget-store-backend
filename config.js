/** Shared config for application; can be req'd many places. */

require('dotenv').config();

const SECRET = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 3001;

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 10;

/**
 * Array of table names that have an is_active column to
 * allow "soft delete" of rows in these tables.
 * Used by partialUpdate so rows behave as if deleted.
 */
const IS_ACTIVE_TABLES = ['users', 'products'];

// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'widget-store-test'
// - else: 'widget-store'

let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'widget-store-test';
} else {
  DB_URI = process.env.DATABASE_URL || 'widget-store';
}

console.log('Using database', DB_URI);

module.exports = {
  SECRET,
  PORT,
  DB_URI,
  BCRYPT_WORK_FACTOR,
  IS_ACTIVE_TABLES,
};