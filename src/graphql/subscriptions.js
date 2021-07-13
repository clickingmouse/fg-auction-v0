/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid {
    onCreateBid {
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
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid {
    onUpdateBid {
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
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid {
    onDeleteBid {
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
export const onCreatePropertyDetail = /* GraphQL */ `
  subscription OnCreatePropertyDetail {
    onCreatePropertyDetail {
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
      prn
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePropertyDetail = /* GraphQL */ `
  subscription OnUpdatePropertyDetail {
    onUpdatePropertyDetail {
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
      prn
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePropertyDetail = /* GraphQL */ `
  subscription OnDeletePropertyDetail {
    onDeletePropertyDetail {
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
      prn
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite {
    onCreateFavorite {
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
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite {
    onUpdateFavorite {
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
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite {
    onDeleteFavorite {
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
export const onCreateAuction = /* GraphQL */ `
  subscription OnCreateAuction {
    onCreateAuction {
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
export const onUpdateAuction = /* GraphQL */ `
  subscription OnUpdateAuction {
    onUpdateAuction {
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
export const onDeleteAuction = /* GraphQL */ `
  subscription OnDeleteAuction {
    onDeleteAuction {
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
      coverPhoto
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
        prn
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
      coverPhoto
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
        prn
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
      coverPhoto
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
        prn
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateAuctionBid = /* GraphQL */ `
  subscription OnCreateAuctionBid {
    onCreateAuctionBid {
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
export const onUpdateAuctionBid = /* GraphQL */ `
  subscription OnUpdateAuctionBid {
    onUpdateAuctionBid {
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
export const onDeleteAuctionBid = /* GraphQL */ `
  subscription OnDeleteAuctionBid {
    onDeleteAuctionBid {
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
