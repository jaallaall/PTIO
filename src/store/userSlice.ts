import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { Options } from 'interfaces'

const initialState: Options = {
    customerFullName: '',
    customerId: '',
    customerType: 0,
    customerTypeDisplay: '',
    token: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (
            state: Draft<typeof initialState>,
            action: PayloadAction<typeof initialState>
        ) => {
            state.customerId = action.payload
            state.token = action.payload
        },
        resetUser: (state: Draft<typeof initialState>) => {
            state.customerId = ''
            state.token = ''
        },
    },
})

// Selectors
export const userSelector = (state: Options): Options => state

// Reducers and actions
export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer
