import { ApiRespType } from '../../../apps/app/src/types'

interface PokemonCardPropType {
    pokemonDetails: ApiRespType
}

export const PokemonCard = ({pokemonDetails}: PokemonCardPropType) => {
  return (
    <li style={{padding: 16, border: "1px solid rgba(0,0,0,0.3)", marginBottom: 16, borderRadius: 8, textTransform: "capitalize"}}>
        {pokemonDetails.name}
    </li>
  )
}