var BerezkaTokenAdapter = artifacts.require("BerezkaTokenAdapter");

const GOV = "0xBC7166DEE7B0D157fa949d4b7c0Cc75982F3aE14"
const GOV_STAKING = "0x8f8a4d60DC8Ce809cA5C37d71295cf1BC06db7C7"

module.exports = (deployer) => {
    deployer.then(async () => {
        
        await deployer.deploy(BerezkaTokenAdapter,
            GOV, GOV_STAKING
        )        
    
        console.log(`BerezkaTokenAdapter deployed`)
    })
};
