import { useSelector } from 'react-redux';
import { PokemonCard } from './index';
import { RootState } from '../store/store';

const List = () => {
  const {data} = useSelector((state: RootState) => state.pokemon)
  return (
    <ol style={{maxWidth: 1000, listStylePosition: "inside", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", paddingLeft: 0}}>
      {data.map((item, index) => (
        <PokemonCard key={`${index}_${item.name}`} pokemonDetails={item} />
      ))}
    </ol>
  )
}

export default List;