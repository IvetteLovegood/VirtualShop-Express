module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || "mongodb://heroku_z71vxqlz:uah7rminmoadf1scheoact5a0n@ds259787.mlab.com:59787/heroku_z71vxqlz",
  SECRET_TOKEN: "tokenkey"
};
