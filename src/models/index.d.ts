import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Bid {
  readonly id: string;
  readonly auctions?: (AuctionBid | null)[];
  readonly bidAmount?: number;
  readonly bidderID?: string;
  constructor(init: ModelInit<Bid>);
  static copyOf(source: Bid, mutator: (draft: MutableModel<Bid>) => MutableModel<Bid> | void): Bid;
}

export declare class AuctionBid {
  readonly id: string;
  readonly auction: Auction;
  readonly bid: Bid;
  constructor(init: ModelInit<AuctionBid>);
  static copyOf(source: AuctionBid, mutator: (draft: MutableModel<AuctionBid>) => MutableModel<AuctionBid> | void): AuctionBid;
}

export declare class Auction {
  readonly id: string;
  readonly AuctionBids?: (AuctionBid | null)[];
  readonly openingBid?: number;
  readonly reservePrice?: number;
  readonly auctionDate?: string;
  readonly auctionStartTime?: string;
  readonly auctionEndTime?: string;
  readonly winningBid?: number;
  readonly bidAmount?: number;
  constructor(init: ModelInit<Auction>);
  static copyOf(source: Auction, mutator: (draft: MutableModel<Auction>) => MutableModel<Auction> | void): Auction;
}

export declare class PropertyDetail {
  readonly id: string;
  readonly saleableArea?: number;
  readonly grossArea?: string;
  readonly buildingAge?: string;
  readonly propertyDirection?: string;
  readonly propertyView?: string;
  readonly photos?: string;
  readonly video?: string;
  readonly VR?: string;
  readonly floorplan?: string;
  readonly designPlan?: string;
  readonly map?: string;
  readonly valuation?: number;
  readonly startingBid?: string;
  readonly address?: string;
  readonly prn: string;
  constructor(init: ModelInit<PropertyDetail>);
  static copyOf(source: PropertyDetail, mutator: (draft: MutableModel<PropertyDetail>) => MutableModel<PropertyDetail> | void): PropertyDetail;
}

export declare class Favorite {
  readonly id: string;
  readonly properties?: string;
  readonly uid?: string;
  constructor(init: ModelInit<Favorite>);
  static copyOf(source: Favorite, mutator: (draft: MutableModel<Favorite>) => MutableModel<Favorite> | void): Favorite;
}

export declare class Property {
  readonly id: string;
  readonly prn: string;
  readonly size?: number;
  readonly bedrooms?: number;
  readonly bathrooms?: number;
  readonly price?: number;
  readonly residential?: boolean;
  readonly publicHousing?: boolean;
  readonly commercial?: boolean;
  readonly industrial?: boolean;
  readonly parking?: boolean;
  readonly location?: string;
  readonly codeName?: string;
  readonly PropertyDetail?: PropertyDetail;
  readonly district?: string;
  readonly coverPhoto?: string;
  constructor(init: ModelInit<Property>);
  static copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}