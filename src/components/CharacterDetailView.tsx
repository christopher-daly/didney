import { Character } from "@/types/character";

const CharacterDetailList = (props: {heading: string, values: string[]}) => {
  if (props.values.length === 0) return <></>
  return <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{props.heading}</h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {props.values.map(value => <li key={value} aria-label={value}>{value}</li>)}
      </ul>
    </div>
}

export const CharacterDetailView = ({ character }: { character: Character }) => {
  return <div data-testid="detail-view">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">{character.name}</h1>
    <img src={character.imageUrl} alt={character.name} />
    <CharacterDetailList values={character.allies} heading={"Allies"} />
    <CharacterDetailList values={character.enemies} heading={"Enemies"} />
    <CharacterDetailList values={character.shortFilms} heading={"Short Films"} />
    <CharacterDetailList values={character.tvShows} heading={"TV Shows"} />
    <CharacterDetailList values={character.videoGames} heading={"Video Games"} />
    <CharacterDetailList values={character.parkAttractions} heading={"Park Attractions"} />
  </div>
}