import {ADD_TO_CARD} from '../constant'
export const addToCard=(data)=>{
    // console.log('action====>', data)
    return{
        type:ADD_TO_CARD,
        data:data
    }
}

// export const removeToCard=()=>{
//     return{
//         type:'Remove-To-Card',
//         data:data
//     }
// }