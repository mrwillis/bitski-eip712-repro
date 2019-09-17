export function getPayload() {
  return {
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" }
      ],
      Details: [
        { name: "title", type: "string" },
        { name: "marketData", type: "string" },
        { name: "betting", type: "string" },
        { name: "stake", type: "string" },
        { name: "odds", type: "string" },
        { name: "returnAmount", type: "string" },
        { name: "fills", type: "FillObject" }
      ],
      FillObject: [
        { name: "orders", type: "Order[]" },
        { name: "makerSigs", type: "bytes[]" },
        { name: "takerAmounts", type: "uint256[]" },
        { name: "fillSalt", type: "uint256" }
      ],
      Order: [
        { name: "marketHash", type: "bytes32" },
        { name: "totalBetSize", type: "uint256" },
        { name: "percentageOdds", type: "uint256" },
        { name: "expiry", type: "uint256" },
        { name: "relayerMakerFee", type: "uint256" },
        { name: "relayerTakerFee", type: "uint256" },
        { name: "salt", type: "uint256" },
        { name: "maker", type: "address" },
        { name: "relayer", type: "address" },
        { name: "executor", type: "address" },
        { name: "isMakerBettingOutcomeOne", type: "bool" }
      ]
    },
    primaryType: "Details",
    domain: {
      name: "FillOrderAepex",
      version: "1.0",
      chainId: 1,
      verifyingContract: "0x8c16EE4df1a680f173E05eBEFeb8dF33775607Fc"
    },
    message: {
      title: "Confirm Your Bet",
      marketData: "Southampton vs. Bournemouth 3:00pm Sep 20, 2019",
      betting: "Southampton -0.5",
      stake: "$10.00",
      odds: "2.048",
      returnAmount: "$20.07",
      fills: {
        makerSigs: [
          "0xc35d52b0d85585aedde8f97d533fbb267e1de78e44a9998892ffeeafffaca8e869acdc59343d80f95e029001fd3737275ea4f060281f89097c8d085446b59af71b"
        ],
        orders: [
          {
            marketHash:
              "0x3ad262adcf6c51752a68a5870d8d23a681f16adea19aec72485b3e3753004d34",
            totalBetSize: "75000000000000000000",
            percentageOdds: "51173076923076923077",
            expiry: "1569006000",
            relayerMakerFee: "0",
            relayerTakerFee: "0",
            salt:
              "35160499014164290989970958221313776412574546156093927486026054940769019778962",
            maker: "0x4132Ca401772137B1E2264C40Cf5F9a9C5260E6d",
            relayer: "0x57E3f77ba8856AA069a4D4BF7AFDd784A3Fd2008",
            executor: "0x57E3f77ba8856AA069a4D4BF7AFDd784A3Fd2008",
            isMakerBettingOutcomeOne: false
          }
        ],
        takerAmounts: ["10480504135486411973"],
        fillSalt:
          "71820106144546710112988087623105401741404880555396241346308437352394820639225"
      }
    }
  };
}
