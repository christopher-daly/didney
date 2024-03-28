import { Character } from "@/types/character";

const CharacterView = ({ character, onClick }: { character: Character, onClick: (selected: Character) => void }) => {
  return <div>
    <img src={character.imageUrl} alt={character.name} />
    <button onClick={() => onClick(character)}>{character.name}</button>
  </div>
}

export const CharacterListView = (props: { characters: Character[], onClick: (selected: Character) => void }) => {
  return <div>
    {props.characters.map(character => <CharacterView key={character._id} character={character}
                                                      onClick={props.onClick} />)}
  </div>
}