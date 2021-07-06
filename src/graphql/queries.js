/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
      id
      bidAmount
      bidderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      auctions {
        nextToken
        startedAt
      }
    }
  }
`;
export const listBids = /* GraphQL */ `
  query ListBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bidAmount
        bidderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBids = /* GraphQL */ `
  query SyncBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBids(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bidAmount
        bidderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPropertyDetail = /* GraphQL */ `
  query GetPropertyDetail($id: ID!) {
    getPropertyDetail(id: $id) {
      id
      saleableArea
      grossArea
      buildingAge
      propertyDirection
      propertyView
      photos
      video
      VR
      floorplan
      designPlan
      map
      valuation
      startingBid
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPropertyDetails = /* GraphQL */ `
  query ListPropertyDetails(
    $filter: ModelPropertyDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertyDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        saleableArea
        grossArea
        buildingAge
        propertyDirection
        propertyView
        photos
        video
        VR
        floorplan
        designPlan
        map
        valuation
        startingBid
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPropertyDetails = /* GraphQL */ `
  query SyncPropertyDetails(
    $filter: ModelPropertyDetailFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPropertyDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        saleableArea
        grossArea
        buildingAge
        propertyDirection
        propertyView
        photos
        video
        VR
        floorplan
        designPlan
        map
        valuation
        startingBid
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
      id
      properties
      uid
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        properties
        uid
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFavorites = /* GraphQL */ `
  query SyncFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFavorites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        properties
        uid
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuction = /* GraphQL */ `
  query GetAuction($id: ID!) {
    getAuction(id: $id) {
      id
      openingBid
      reservePrice
      auctionDate
      auctionStartTime
      auctionEndTime
      winningBid
      bidAmount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AuctionBids {
        nextToken
        startedAt
      }
    }
  }
`;
export const listAuctions = /* GraphQL */ `
  query ListAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        openingBid
        reservePrice
        auctionDate
        auctionStartTime
        auctionEndTime
        winningBid
        bidAmount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuctions = /* GraphQL */ `
  query SyncAuctions(
    $filter: ModelAuctionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuctions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        openingBid
        reservePrice
        auctionDate
        auctionStartTime
        auctionEndTime
        winningBid
        bidAmount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      prn
      size
      bedrooms
      bathrooms
      price
      residential
      publicHousing
      commercial
      industrial
      parking
      location
      codeName
      district
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PropertyDetail {
        id
        saleableArea
        grossArea
        buildingAge
        propertyDirection
        propertyView
        photos
        video
        VR
        floorplan
        designPlan
        map
        valuation
        startingBid
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        prn
        size
        bedrooms
        bathrooms
        price
        residential
        publicHousing
        commercial
        industrial
        parking
        location
        codeName
        district
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        prn
        size
        bedrooms
        bathrooms
        price
        residential
        publicHousing
        commercial
        industrial
        parking
        location
        codeName
        district
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuctionBids = /* GraphQL */ `
  query SyncAuctionBids(
    $filter: ModelAuctionBidFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuctionBids(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        auctionID
        bidID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
