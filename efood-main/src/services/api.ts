import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../models/Restaurante'

type ProductType = {
  id: number
  price: number
}

type PurchaseResponseType = {
  orderId: string
}

type PurchasePayload = {
  products: ProductType[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getPageRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponseType, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body: body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetPageRestauranteQuery,
  usePurchaseMutation
} = api

export default api
