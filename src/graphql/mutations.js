/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
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
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
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
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
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
export const createPropertyDetail = /* GraphQL */ `
  mutation CreatePropertyDetail(
    $input: CreatePropertyDetailInput!
    $condition: ModelPropertyDetailConditionInput
  ) {
    createPropertyDetail(input: $input, condition: $condition) {
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
export const updatePropertyDetail = /* GraphQL */ `
  mutation UpdatePropertyDetail(
    $input: UpdatePropertyDetailInput!
    $condition: ModelPropertyDetailConditionInput
  ) {
    updatePropertyDetail(input: $input, condition: $condition) {
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
export const deletePropertyDetail = /* GraphQL */ `
  mutation DeletePropertyDetail(
    $input: DeletePropertyDetailInput!
    $condition: ModelPropertyDetailConditionInput
  ) {
    deletePropertyDetail(input: $input, condition: $condition) {
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
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
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
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
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
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
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
export const createAuction = /* GraphQL */ `
  mutation CreateAuction(
    $input: CreateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    createAuction(input: $input, condition: $condition) {
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
export const updateAuction = /* GraphQL */ `
  mutation UpdateAuction(
    $input: UpdateAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    updateAuction(input: $input, condition: $condition) {
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
export const deleteAuction = /* GraphQL */ `
  mutation DeleteAuction(
    $input: DeleteAuctionInput!
    $condition: ModelAuctionConditionInput
  ) {
    deleteAuction(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createAuctionBid = /* GraphQL */ `
  mutation CreateAuctionBid(
    $input: CreateAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    createAuctionBid(input: $input, condition: $condition) {
      id
      auctionID
      bidID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      bid {
        id
        bidAmount
        bidderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      auction {
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
    }
  }
`;
export const updateAuctionBid = /* GraphQL */ `
  mutation UpdateAuctionBid(
    $input: UpdateAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    updateAuctionBid(input: $input, condition: $condition) {
      id
      auctionID
      bidID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      bid {
        id
        bidAmount
        bidderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      auction {
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
    }
  }
`;
export const deleteAuctionBid = /* GraphQL */ `
  mutation DeleteAuctionBid(
    $input: DeleteAuctionBidInput!
    $condition: ModelAuctionBidConditionInput
  ) {
    deleteAuctionBid(input: $input, condition: $condition) {
      id
      auctionID
      bidID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      bid {
        id
        bidAmount
        bidderID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      auction {
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
    }
  }
`;
