import { ErrorComponent, List } from 'ui';
import useApi from './hooks/useApi';

const api = "https://pokeapi.co/api/v2/pokemon";

const App = () => {
  const {data, loading, error} = useApi({url: api, limit: 151});

  if(error) return <ErrorComponent error={error} />

  return (
  <>
    <h1>Pokemon list:</h1>
    {loading ? (
      <div>Looooadingggg....</div>
    ) : (
      <List />
    )}
    
  </>
  )
}

export default App
