import { Container } from '../../styles'
import Hero from '../../containers/Hero'
import ListaRestaurantes from '../../containers/ListaRestaurantes'
import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: listaRestaurantesData } = useGetRestaurantesQuery()

  return (
    <>
      <Hero />
      <Container>
        {listaRestaurantesData && (
          <ListaRestaurantes restaurantes={listaRestaurantesData} />
        )}
      </Container>
    </>
  )
}

export default Home
