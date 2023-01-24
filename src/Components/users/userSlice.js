import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    //! here you can add  your actions later
    //addd user method
    userAdded(state, action) {
      console.log(action.payload);
      state.users.push(action.payload);
    },

    //delete user
    userDeleted(state, action) {
      const { id } = action.payload;
      console.log(id);
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    },
    //update user
    userUpdated(state, action) {
      console.log(action.payload);

      const {id,name,email} = action.payload;

      const existingUser = state.users.find(user=>user.id === id)
      
      if(existingUser){
          existingUser.name = name;
          existingUser.email = email;
      }


    },
  },
});

export const { userAdded, userDeleted, userUpdated } = userSlice.actions;
export default userSlice.reducer;
