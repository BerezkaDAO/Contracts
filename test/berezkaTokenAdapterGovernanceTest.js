const { assert } = require("console");

const BerezkaTokenAdapterGovernance = artifacts.require("./BerezkaTokenAdapterGovernance.sol");

// EFLX
const EFLX_TOKEN = "0xD68E7b64888F095Ee15f18347ccA7e453E0DBe17"
const EFLX_VAULTS = [
    "0xe327b30c414a94382d1a5b6416f0f241eea1f653",
    "0x64079ab1273b22405a302347fe627760e462f0c3"
]

const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7"

const ERC20_TOKENS = [
    USDC,
    USDT
]

const UNISWAP_POOLS = [
    "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc"
]

const DEBT_ADAPTERS = [
    "0xAE61B0d0A562E5C1Daf9c1dED4A8FD6A770B639a", // CompoundDebtAdapter
    "0x30F0BB7556159B0E812DE4af7023daCFDD4F7110"  // AaveDebtAdapter
]

const DYDX_DEBT_ADAPTER = "0xBf3fc291876707b2D0C8fC49BCD76fAE00219d37"
// --

// Ethereum only debt adapters
const ETH_DEBT_ADAPTERS = [
    "0x525a4259435682Ab0d4BB6c8F0cDeE25f5B6cD26" // Maker
]

const COMPOUND_DEBT_ADAPTER = "0xAE61B0d0A562E5C1Daf9c1dED4A8FD6A770B639a"  // CompoundDebtAdapter


contract("BerezkaTokenAdapterGovernance", _ => {
    it("...should allow to add and remove token vault", async () => {
        const contract = await BerezkaTokenAdapterGovernance.new(
            DEBT_ADAPTERS, 
            ETH_DEBT_ADAPTERS
        )

        await contract.setProductVaults(EFLX_TOKEN, EFLX_VAULTS)

        var flexVaults = await contract.getVaults(EFLX_TOKEN)
        var flexVaultsValue = JSON.parse(JSON.stringify(flexVaults))

        expect(flexVaultsValue.length).to.equal(2)

        await contract.setProductVaults(EFLX_TOKEN, ["0xe327b30c414a94382d1a5b6416f0f241eea1f653"])

        flexVaults = await contract.getVaults(EFLX_TOKEN)
        flexVaultsValue = JSON.parse(JSON.stringify(flexVaults))
    })

    it("...should allow to add and remove tokens", async () => {
        const contract = await BerezkaTokenAdapterGovernance.new(
            DEBT_ADAPTERS, 
            ETH_DEBT_ADAPTERS
        )

        await contract.addTokens("ERC20", ERC20_TOKENS);
        await contract.addTokens("Uniswap V2 pool token", UNISWAP_POOLS);

        var tokens = await contract.listTokens()
        var tokensValue = JSON.parse(JSON.stringify(tokens))

        expect(tokensValue.length).to.equal(3)

        // Add duplicate tokens
        await contract.addTokens("ERC20", ERC20_TOKENS);
        await contract.addTokens("Uniswap V2 pool token", UNISWAP_POOLS);

        var tokens = await contract.listTokens()
        var tokensValue = JSON.parse(JSON.stringify(tokens))

        expect(tokensValue.length).to.equal(3)
        // -- End test Add duplicate tokens

        var erc20tokens = await contract.listTokens("ERC20")
        var erc20tokensValue = JSON.parse(JSON.stringify(erc20tokens))

        expect(erc20tokensValue.length).to.equal(2)

        await contract.removeTokens("ERC20", [USDC]);

        var tokens = await contract.listTokens()
        var tokensValue = JSON.parse(JSON.stringify(tokens))

        expect(tokensValue.length).to.equal(2)

        var erc20tokens = await contract.listTokens("ERC20")
        var erc20tokensValue = JSON.parse(JSON.stringify(erc20tokens))

        expect(erc20tokensValue.length).to.equal(1)
    })

    it("...should allow to add and remove protocols", async () => {
        const contract = await BerezkaTokenAdapterGovernance.new(
            DEBT_ADAPTERS, 
            ETH_DEBT_ADAPTERS
        )

        var protocols = await contract.listProtocols();
        var protocolsValue = JSON.parse(JSON.stringify(protocols))

        expect(protocolsValue.length).to.equal(2)

        await contract.addProtocols([DYDX_DEBT_ADAPTER])

        protocols = await contract.listProtocols()
        protocolsValue = JSON.parse(JSON.stringify(protocols))

        expect(protocolsValue.length).to.equal(3)

        // Test add duplicate protocols
        await contract.addProtocols([DYDX_DEBT_ADAPTER])

        protocols = await contract.listProtocols()
        protocolsValue = JSON.parse(JSON.stringify(protocols))

        expect(protocolsValue.length).to.equal(3)
        // End test duplicate protocols

        await contract.removeProtocols([DYDX_DEBT_ADAPTER])

        protocols = await contract.listProtocols()
        protocolsValue = JSON.parse(JSON.stringify(protocols))

        expect(protocolsValue.length).to.equal(2)
    })

    it("...should allow to add and remove eth protocols", async () => {
        const contract = await BerezkaTokenAdapterGovernance.new(
            DEBT_ADAPTERS, 
            ETH_DEBT_ADAPTERS
        )

        var protocols = await contract.listEthProtocols();
        var protocolsValue = JSON.parse(JSON.stringify(protocols))

        expect(protocolsValue.length).to.equal(1)

        await contract.addEthProtocols([COMPOUND_DEBT_ADAPTER])

        protocols = await contract.listEthProtocols()
        protocolsValue = JSON.parse(JSON.stringify(protocols))

        expect(protocolsValue.length).to.equal(2)

        await contract.removeEthProtocols([COMPOUND_DEBT_ADAPTER])

        protocols = await contract.listEthProtocols()
        protocolsValue = JSON.parse(JSON.stringify(protocols))

        expect(protocolsValue.length).to.equal(1)
    })
})