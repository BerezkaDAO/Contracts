var BerezkaPriceTracker = artifacts.require("./BerezkaPriceTracker.sol");
var BerezkaPriceOverride = artifacts.require("./BerezkaPriceOverride.sol");

module.exports = (deployer) => {
  deployer.then(async () => {
    //const berezkaPriceOverrideInstance = BerezkaPriceTracker.at("0x0844062cc26B3E71711500eE2b472EcE36669397");
    
    //console.log(`Deployed BerezkaPriceOverride at ${berezkaPriceOverrideInstance.address}`)

    const berezkaPriceTrackerInstance = await deployer.deploy(
      BerezkaPriceTracker, 
      "0x06FE76B2f432fdfEcAEf1a7d4f6C3d41B5861672",
      "0x0844062cc26B3E71711500eE2b472EcE36669397"
    );

    console.log(`Deployed BerezkaPriceTracker at ${berezkaPriceTrackerInstance.address}`)

    /*
    await berezkaPriceOverrideInstance.setPrice(
      "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
      "1060000"
    )

    console.log(`+ PRICE 0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8`)

    await berezkaPriceOverrideInstance.setPrice(
      "0xD16c79c8A39D44B2F3eB45D2019cd6A42B03E2A9",
      "1015625"
    )

    console.log(`+ PRICE 0xD16c79c8A39D44B2F3eB45D2019cd6A42B03E2A9`)

    await berezkaPriceOverrideInstance.setToken(
      "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
      "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
    )

    console.log(`+ TOKEN 0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3`)
    */
  })
};