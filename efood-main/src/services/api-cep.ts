import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type CepResponseType = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

const apiCep = createApi({
  reducerPath: 'apiCepPath',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://viacep.com.br/ws/'
  }),
  endpoints: (builder) => ({
    getCepInfo: builder.query<CepResponseType, string>({
      query: (cep) => `${cep}/json`
    })
  })
})

export const { useGetCepInfoQuery } = apiCep

export default apiCep
