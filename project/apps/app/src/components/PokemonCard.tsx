import { useDispatch, useSelector } from 'react-redux'
import { ApiRespType } from '../types'
import { AppDispatch, RootState } from '../store/store';

interface PokemonCardPropType {
  pokemonDetails: ApiRespType
}

const PokemonCard = ({pokemonDetails}: PokemonCardPropType) => {
  const dispatch = useDispatch<AppDispatch>();
  const {data} = useSelector((state: RootState) => state.pokemon);

  const deletePokemon = (name: string) => {
    const oldData = [...data];
    const newData = oldData.filter((item) => item.name !== name)
    dispatch({type: "pokemon/removePokemon", payload: newData})
  };

  return (
    <li style={{padding: 16, border: "1px solid rgba(0,0,0,0.3)", marginBottom: 16, borderRadius: 8, textTransform: "capitalize", display: "flex", justifyContent: "space-between"}}>
        {pokemonDetails.name}
        <button onClick={() => deletePokemon(pokemonDetails.name)} style={{backgroundColor: "#ff5252", color: "white", padding: "6px 10px", border: "none", borderRadius: 6}}>Delete</button>
    </li>
  )
}

export default PokemonCard;