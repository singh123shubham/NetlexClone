import {createSlice} from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSerach : false
    },
    reducers:{
        toggleSerachView : (state,action) =>{
            state.showGptSerach =! state.showGptSerach
        }
    }
})

export const {toggleSerachView} = gptSlice.actions
export default gptSlice.reducer