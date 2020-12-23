var BerezkaTokenAdapterStakingGovernance = artifacts.require("BerezkaTokenAdapterStakingGovernance");

const UNISWAP_STAKING_ADAPTER = "0x2Cf372984a2e3c8B2A021d0889B65D590f00D646"
// -- 

const STAKING_ADAPTERS = [
    UNISWAP_STAKING_ADAPTER
]
// --

module.exports = (deployer) => {
    deployer.then(async () => {
        
        await deployer.deploy(BerezkaTokenAdapterStakingGovernance,
            STAKING_ADAPTERS
        )        
    
        console.log(`BerezkaTokenAdapterStakingGovernance deployed`)
    })
};
