import { Character } from "@/types/character";

const Character = ({ character }: { character: Character }) => {
  return <button key={character._id}>{character.name}</button>
}

export const CharacterList = (props: { characters: Character[] }) => {
  return <>
    {props.characters.map(character => <Character character={character} />)}
  </>
}