require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test":".env"
});

module.exports = {
  username: '',
  password: '',
  database: 'tdd',
  storage: './__tests__/tdd.db',
  host: 'localhost',
  dialect: 'sqlite',
  define: {
    timestamps: true
  }
}