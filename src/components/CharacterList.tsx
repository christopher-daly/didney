import { Character } from "@/types/character";

const CharacterView = ({ character }: { character: Character }) => {
  return <div>
    <img src={character.imageUrl} alt={character.name} />
    <button>{character.name}</button>
  </div>
}

export const CharacterListView = (props: { characters: Character[] }) => {
  return <div>
    {props.characters.map(character => <CharacterView key={character._id} character={character} />)}
  </div>
}