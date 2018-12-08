// configure Env variables
require('dotenv').config();

module.exports = (req, res) => {
  res.end(`Welcome to Micro, env = ${ process.env.STAGE || 'default' }`)
}
