import { Character } from "./character";

export type GetCharactersApiResponse = {
    info: {
        totalPages: number,
        count: number,
        previousPage: string | null,
        nextPage: string | null
    },
    data: Character[]
}