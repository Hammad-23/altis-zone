import {ADD_TO_CARD} from '../constant'

const initialState={
    cardData:[]
}
export default function cardItems(state={}, action){
        switch(action.type){

            case    ADD_TO_CARD:
                console.log('reducer====>', action)
            return {
                ...state,
                cardData:action.data
            }
            break;
            default:
                return state  
                
        
    }
}