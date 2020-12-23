const BerezkaTokenAdapter = artifacts.require("./BerezkaTokenAdapter.sol");
const BerezkaTokenAdapterGovernance = artifacts.require("./BerezkaTokenAdapterGovernance.sol");
const BerezkaTokenAdapterStakingGovernance = artifacts.require("./BerezkaTokenAdapterStakingGovernance.sol");

const FLEX_TOKEN = "0x0D7DeA5922535087078dd3D7c554EA9f2655d4cB"

const EFLX_TOKEN = "0xD68E7b64888F095Ee15f18347ccA7e453E0DBe17"
const BDQ_TOKEN = "0xf6ce9BFA82D1088d3257a76ec2e0ce1C8060BF8c"
const DYNA_TOKEN = "0xdc76450fd7e6352733fe8550efabff750b2de0e3";

contract("BerezkaTokanAdapter", _ => {
    it("...should return corrent token sets for FLEX", async() => {
        // Deploy governance
        const governance = await BerezkaTokenAdapterGovernance.deployed()
        const staking = await BerezkaTokenAdapterStakingGovernance.deployed()

        console.log(`governance.address=${governance.address}, staking.address=${staking.address}`)
            // Deploy adapter
        const adapter = await BerezkaTokenAdapter.new("0xBC7166DEE7B0D157fa949d4b7c0Cc75982F3aE14", "0x8f8a4d60DC8Ce809cA5C37d71295cf1BC06db7C7")
            // Call adapter
        const components = await adapter.getComponents(FLEX_TOKEN)

        console.log(JSON.stringify(components))
    });

    /*
    it("...should return corrent token sets for EFLX", async() => {
        // Deploy governance
        const governance = await BerezkaTokenAdapterGovernance.deployed()
        const staking = await BerezkaTokenAdapterStakingGovernance.deployed()

        // Deploy adapter
        const adapter = await BerezkaTokenAdapter.new(governance.address, staking.address)
            // Call adapter
        const components = await adapter.getComponents(EFLX_TOKEN)

        console.log(JSON.stringify(components))
    });

    it("...should return corrent token sets for DYNA", async() => {
        // Deploy governance
        const governance = await BerezkaTokenAdapterGovernance.deployed()
        const staking = await BerezkaTokenAdapterStakingGovernance.deployed()

        // Deploy adapter
        const adapter = await BerezkaTokenAdapter.new(governance.address, staking.address)
            // Call adapter
        const components = await adapter.getComponents(DYNA_TOKEN)

        console.log(JSON.stringify(components))
    });

    it("...should return corrent token sets for BDQ", async() => {
        // Deploy governance
        const governance = await BerezkaTokenAdapterGovernance.deployed()
        const staking = await BerezkaTokenAdapterStakingGovernance.deployed()

        // Deploy adapter
        const adapter = await BerezkaTokenAdapter.new(governance.address, staking.address)
            // Call adapter
        const components = await adapter.getComponents(BDQ_TOKEN)

        console.log(JSON.stringify(components))
    });
    */
});