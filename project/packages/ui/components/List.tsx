import { ApiRespType } from '../../../apps/app/src/types';
import { PokemonCard } from '../index';

interface ListPropType {
  list: ApiRespType[]
}

export const List = ({list}: ListPropType) => {
  return (
    <div>
      <ol style={{maxWidth: 250, listStylePosition: "inside"}}>
        {list.map((item) => (
          <PokemonCard pokemonDetails={item} />
        ))}
      </ol>
    </div>
  )
}