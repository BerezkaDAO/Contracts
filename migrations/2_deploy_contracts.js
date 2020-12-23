var BerezkaTokenAdapterGovernance = artifacts.require("BerezkaTokenAdapterGovernance");

// FLEX
const FLEX_TOKEN = "0x0D7DeA5922535087078dd3D7c554EA9f2655d4cB"
const FLEX_VAULTS = [
    "0xf8a8d25049ebfaf36cf1dd7ff51ebd0777fc9b32",
    "0xc6f7cB66f28954D1EB265d3aE3E24FF20D45d433"
]

// EFLX
const EFLX_TOKEN = "0xD68E7b64888F095Ee15f18347ccA7e453E0DBe17"
const EFLX_VAULTS = [
    "0xe327b30c414a94382d1a5b6416f0f241eea1f653",
    "0x64079ab1273b22405a302347fe627760e462f0c3"
]

// BDQ
const BDQ_TOKEN = "0xf6ce9BFA82D1088d3257a76ec2e0ce1C8060BF8c"
const BDQ_VAULTS = [
    "0xac1c30c8ae96a6cdd392bc2593a6e00d964b73c2"
]

// DYNA
const DYNA_TOKEN = "0xdc76450fd7e6352733fe8550efabff750b2de0e3";
const DYNA_VAULTS = [
    "0xd7b25a928f2de0beff34247a42fcb219b04323cc"
]

// Token addresses
const USDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
const USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7"
const DAI = "0x6b175474e89094c44da98b954eedeac495271d0f"
const TUSD = "0x0000000000085d4780B73119b644AE5ecd22b376"
const BUSD = "0x4fabb145d64652a948d72533023f6e7a623c7c53"
const PAX = "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
const SUSD = "0x57ab1ec28d129707052df4df418d58a2d46d5f51"
const MKR = "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
const ZRX = "0xe41d2489571d322189246dafa5ebde1f4699f498"
const BAT = "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
const WBTC = "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4"
const RENBTC = "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d"
const YFI = "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e"
const LEND = "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03"
const COMP = "0xc00e94cb662c3520282e6f5717214004a7f26888"
const BAL = "0xba100000625a3754423978a60c9317c58a424e3d"
const KNC = "0xdd974d5c2e2928dea5f71b9825b8b646686bd200"
const LINK = "0x514910771af9ca656af840dff83e8264ecf986ca"
const SNX = "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
const ENJ = "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
const GST2 = "0x0000000000b3f879cb30fe243b4dfee438691c04"
const UMA = "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828"
const CRV = "0xD533a949740bb3306d119CC777fa900bA034cd52"
const SUSHI = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
const cDAI = "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"
const UNI = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
const CHI = "0x0000000000004946c0e9f43f4dee607b0ef1fa1c"
const WBTC2 = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
const SWRV = "0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433"
// -- 

const ERC20_TOKENS = [
    USDC,
    USDT,
    DAI,
    TUSD,
    BUSD,
    PAX,
    SUSD,
    MKR,
    ZRX,
    BAT,
    WBTC,
    RENBTC,
    YFI,
    LEND,
    COMP,
    BAL,
    KNC,
    LINK,
    SNX,
    ENJ,
    GST2,
    UMA,
    CRV,
    SUSHI,
    cDAI,
    UNI,
    CHI,
    WBTC2,
    SWRV
]

// Uniswap pools addresses
const UNISWAP_POOLS = [
    "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
    "0x3041cbd36888becc7bbcbc0045e3b1f144466f5f",
    "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
    "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940"
]

const BALANCER_POOLS = [
    "0xe036cce08cf4e23d33bc6b18e53caf532afa8513",
]

const CURVE_POOLS = [
    "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8",
    "0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23"
]

const YEARN_POOLS = [
    "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c" 
]

// --

// Debt adapters
const DEBT_ADAPTERS = [
    "0xAE61B0d0A562E5C1Daf9c1dED4A8FD6A770B639a", // CompoundDebtAdapter
    "0x30F0BB7556159B0E812DE4af7023daCFDD4F7110", // AaveDebtAdapter
    "0xBf3fc291876707b2D0C8fC49BCD76fAE00219d37"  // DyDxDebtAdapter
]
// --

// Ethereum only debt adapters
const ETH_DEBT_ADAPTERS = [
    "0x525a4259435682Ab0d4BB6c8F0cDeE25f5B6cD26", // Maker
    "0xAE61B0d0A562E5C1Daf9c1dED4A8FD6A770B639a"  // CompoundDebtAdapter
]
// --

module.exports = (deployer) => {
    deployer.then(async () => {
        
        await deployer.deploy(BerezkaTokenAdapterGovernance,
            DEBT_ADAPTERS, 
            ETH_DEBT_ADAPTERS
        )        
    
        let governance = await BerezkaTokenAdapterGovernance.deployed()
        console.log(`BerezkaTokenAdapterGovernance deployed`)
        await governance.setProductVaults(FLEX_TOKEN, FLEX_VAULTS)
        console.log(`+ FLEX`)
        await governance.setProductVaults(EFLX_TOKEN, EFLX_VAULTS)
        console.log(`+ EFLX`)
        await governance.setProductVaults(BDQ_TOKEN , BDQ_VAULTS)
        console.log(`+ BDQ`)
        await governance.setProductVaults(DYNA_TOKEN, DYNA_VAULTS)
        console.log(`+ DYNA`)
        await governance.addTokens("ERC20", ERC20_TOKENS);
        console.log(`+ TokenType: ERC20`)

        await governance.addTokens("Uniswap V2 pool token", UNISWAP_POOLS);
        console.log(`+ TokenType: Uniswap V2 pool token`)

        await governance.addTokens("Balancer pool token", BALANCER_POOLS);
        console.log(`+ TokenType: Balancer pool token`)

        await governance.addTokens("Curve pool token", CURVE_POOLS);
        console.log(`+ TokenType: Curve pool token`)

        await governance.addTokens("YToken", YEARN_POOLS);
        console.log(`+ TokenType: YToken`)
    })
};
