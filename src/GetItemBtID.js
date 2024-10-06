// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUser = createAsyncThunk(
//   "users/fetchUsers",
//   async (id, thunkApi) => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users/" + id
//       );
//       if (!response.ok) {
//         throw new Error("Something go wrong");
//       }
//       return await response.json();
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
