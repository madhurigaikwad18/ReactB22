import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'users',
    initialState:{
        users:[]
    },
    reducers:{

        //! here you can add  your actions later                                       
        //addd user method
        userAdded(state,action){
            console.log(action.payload)
            state.users.push(action.payload)
        }

        //delete user

        //update user


        
    }
})

export const {userAdded} = userSlice.actions
export default userSlice.reducer