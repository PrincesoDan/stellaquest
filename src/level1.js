
const {
    Keypair,
    Server,
    TransactionBuilder,
    Networks,
    Operation,
    BASE_FEE
  } = require('stellar-sdk')
const questKeypair = Keypair.fromSecret('SAOSJKMX7KFV5JBZ75WUNCVOT57ZZE4IZT77N4D5SOPL5UGE7DSZNWHA')
const newKeypair = Keypair.random()
// You would need to remove the '-testnet' here, if you were using the Stellar Public network.
const server = new Server('https://horizon-testnet.stellar.org')
console.log(Keypair)