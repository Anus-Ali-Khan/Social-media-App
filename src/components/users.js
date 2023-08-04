import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from 'firebase/firstore';

const usersCollectionRef = collection(db, "users");
const initialStateValue = getDocs(usersCollectionRef);

export const userSlice = createSlice({

    name: "user",
    initialvalue: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }

})

export const { login } = userSlice.actions;
export default userSlice.reducer;