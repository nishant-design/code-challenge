import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from './slice/api';
import { AppDispatch, RootState } from './store/store';
import { ErrorComponent, List } from './components';

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {loading, error} = useSelector((store: RootState) => store.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon(151))
},[dispatch])

  if(error) return <ErrorComponent />

  return (
  <div style={{padding: "0 2rem"}}>
    <h1>Pokemon list:</h1>
    {loading ? (
      <div>Looooadingggg....</div>
    ) : (
      <List />
    )}
    
  </div>
  )
}

export default App
