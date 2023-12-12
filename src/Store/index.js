import { configureStore, createSlice } from "@reduxjs/toolkit"

const InputSlice = createSlice({
    name: "Input",
    initialState: "",
    reducers: {
        InputFiled: (state, action) => {
            return state = action.payload.inputValue
        }
    }
})

export const InputAction = InputSlice.actions



const QrStore = configureStore({
    reducer: {
        Input: InputSlice.reducer
    }
})

export default QrStore;