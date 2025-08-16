/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ZoraCreator1155FactoryImpl,
  ZoraCreator1155FactoryImpl_SetupNewContract,
} from "generated";

ZoraCreator1155FactoryImpl.SetupNewContract.handler(async ({ event, context }) => {
  const entity: ZoraCreator1155FactoryImpl_SetupNewContract = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newContract: event.params.newContract,
    creator: event.params.creator,
    defaultAdmin: event.params.defaultAdmin,
    contractURI: event.params.contractURI,
    name: event.params.name,
    defaultRoyaltyConfiguration_0: event.params.defaultRoyaltyConfiguration
        [0]
    ,
    defaultRoyaltyConfiguration_1: event.params.defaultRoyaltyConfiguration
        [1]
    ,
    defaultRoyaltyConfiguration_2: event.params.defaultRoyaltyConfiguration
        [2]
    ,
  };

  context.ZoraCreator1155FactoryImpl_SetupNewContract.set(entity);
});
