import { Character } from "@/types/character";

const CharacterView = ({ character }: { character: Character }) => {
  return <div key={character._id}>
    <img src={character.imageUrl} alt={character.name} />
    <button>{character.name}</button>
  </div>
}

export const CharacterListView = (props: { characters: Character[] }) => {
  return <>
    {props.characters.map(character => <CharacterView character={character} />)}
  </>
}