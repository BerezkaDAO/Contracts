const BerezkaPriceOverride = artifacts.require("./BerezkaPriceOverride.sol");

const FLEX_TOKEN = "0x0D7DeA5922535087078dd3D7c554EA9f2655d4cB"

contract("BerezkaPriceOverride", _ => {

  it("...should compute override price", async () => {
    const priceOverride = await BerezkaPriceOverride.deployed()
    
    await priceOverride.setPrice(
        "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c", 
        "1172663"
    ) // per 10^18 0x5dbcf33d8c2e976c6b560249878e6f1491bca25c

    const result = await priceOverride.computePrice(
        "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c",
        "75077000000000000786432"
    )
    console.log(parseInt(result))
    expect(Number.parseInt(result).toString()).to.eq("88040020051")
  });

  it("...should compute token override price", async () => {
    const priceOverride = await BerezkaPriceOverride.deployed()
    
    await priceOverride.setToken(
        "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3", // Curve.fi renBTC/wBTC/sBTC 18
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"  // WBTC 8
    )

    const _result = await priceOverride.replaceToken(
        "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
        "2279551175933542400"
    )
    const result = Number.parseInt(_result[1])
    console.log(result)
    expect(result.toString()).to.eq("227955117")
  });
});
