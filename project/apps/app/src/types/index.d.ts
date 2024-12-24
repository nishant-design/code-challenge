export interface ApiRespType {name: string, url: string}

export interface PokemonInitialState {
    loading: boolean;
    data: ApiRespType[];
    error: string | null;
}