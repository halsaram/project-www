module.exports = {
    networks: {
        development: {
            host: "114.108.177.193",
            port: 22000,
            gas: 4500000,
            gasPrice: 0,
            from: "0xc3394815a3c0e8b2ee9a38fd8cbe999703715bd2",
            network_id: "*", // Match any network id
        }
    }
};