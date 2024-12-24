import { ApiRespType } from '../../../apps/app/src/types';
import { PokemonCard } from '../index';

interface ListPropType {
  list: ApiRespType[]
}

export const List = ({list}: ListPropType) => {
  return (
    <ol style={{maxWidth: 1000, listStylePosition: "inside", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", paddingLeft: 0}}>
      {list.map((item) => (
        <PokemonCard pokemonDetails={item} />
      ))}
    </ol>
  )
}