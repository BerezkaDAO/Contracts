const BerezkaPriceTracker = artifacts.require("./BerezkaPriceTracker.sol");

const FLEX_TOKEN = "0x0D7DeA5922535087078dd3D7c554EA9f2655d4cB"

contract("BerezkaPriceTracker", _ => {

  it("...should get actual token balances", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const tokenBalances = await priceTracker.getNonEmptyTokenBalances(FLEX_TOKEN, { gas: '0x6691b7' });
    
    console.log(tokenBalances);
    console.log(JSON.stringify(tokenBalances))

    const values = JSON.parse(JSON.stringify(tokenBalances))
    console.log(values)
  });

  
  it("...should call uniswap (DAI)", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const price = await priceTracker.getTokenPrice(
      "-1307193372939888918",
      "0x6B175474E89094C44Da98b954EedeAC495271d0F"
    );
    
    console.log(price);
    console.log(JSON.stringify(price))
  });

  it("...should call uniswap (COMP)", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const price = await priceTracker.getTokenPrice(
      "31585136693013",
      "0xc00e94Cb662C3520282E6f5717214004A7f26888"
    );
    
    console.log(price);
    console.log(JSON.stringify(price))
  });

  it("...should call uniswap (cDAI)", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const price = await priceTracker.getTokenPrice(
      "11834575097",
      "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643"
    );
    
    console.log(price);
    console.log(JSON.stringify(price))
  });

  it("...should call uniswap (yearn yCurve)", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const price = await priceTracker.getTokenPrice(
      "192724861",
      "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c"
    );
    
    console.log(price);
    console.log(JSON.stringify(price))
  });

  it("...should call uniswap (0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599)", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const price = await priceTracker.getTokenPrice(
      "-1085",
      "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
    );
    
    console.log(price);
    console.log(JSON.stringify(price))
  });

  it("...should call uniswap (0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433)", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const price = await priceTracker.getTokenPrice(
      "656886749602611",
      "0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433"
    );
    
    console.log(price);
    console.log(JSON.stringify(price))
  });

  it("...should call uniswap (0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852)", async () => {
    const priceTracker = await BerezkaPriceTracker.deployed()
    // Get FLEX token price
    const price = await priceTracker.getTokenPrice(
      "134981",
      "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852"
    );
    
    console.log(price);
    console.log(JSON.stringify(price))
  });
  
});
