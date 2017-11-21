module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "1",
      gas: 2000000, // I played with these numbers. These numbers seemed to work.
      gasPrice: 2000000000
    }
  }
};
