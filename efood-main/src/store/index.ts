import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import ordersReducer from './reducers/orders'
import apiCep from '../services/api-cep'

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    [apiCep.reducerPath]: apiCep.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, apiCep.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
