// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bid, AuctionBid, Auction, PropertyDetail, Favorite, Property } = initSchema(schema);

export {
  Bid,
  AuctionBid,
  Auction,
  PropertyDetail,
  Favorite,
  Property
};