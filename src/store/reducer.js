const FETCH_AUCTIONS = 'FETCH_AUCTIONS'
const FETCH_BIDS = 'FETCH_BIDS'
const FETCH_USER = 'FETCH_USER'
const FETCH_BID = 'FETCH_BIDS'
const INC_BID = 'INC_BID'
const DEC_BID='DEC_BID'

export default function reducer(state, action){
    console.log(state)
    switch(action.type){
        case 'INITIAL':
            return {}
        case 'FETCH_AUCTIONS':
            console.log('reudcer: FETCH AUCTIONS', action)
            return Object.assign(state, {auctions:[ ...action.payload]})

        case 'FETCH_BIDS':
            console.log('reducer: FETCH BIDS', action)
            return Object.assign(state, {bids: [...action.payload]})
        case 'FETCH_USER':
            console.log('reducer: FETCH USER', action)
            return Object.assign(state, {user: action.payload})
        default:
        return state
    }



 //return state
}