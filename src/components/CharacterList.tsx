import { Character } from "@/types/character";

const CharacterView = ({ character, onClick }: { character: Character, onClick: (selected: Character) => void }) => {
  return <button onClick={() => onClick(character)} className="col-span-1 col-start-auto flex flex-col justify-center items-center mb-4 hover:scale-150 hover:z-50 hover:bg-grey-300 duration-500">
    <img className="aspect-square rounded-full w-28 object-cover" src={character.imageUrl} alt={character.name} />
    <span>{character.name}</span>
  </button>
}

export const CharacterListView = (props: { characters: Character[], onClick: (selected: Character) => void }) => {
  return <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-y-4">
    {props.characters.map(character => <CharacterView key={character._id} character={character}
                                                      onClick={props.onClick} />)}
  </div>
}