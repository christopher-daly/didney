import { Character } from "@/types/character";

const CharacterDetailList = (props: {heading: string, values: string[]}) => {
  if (props.values.length === 0) return <></>
  return <div>
      <h2>{props.heading}</h2>
      <ul>
        {props.values.map(value => <li key={value} aria-label={value}>{value}</li>)}
      </ul>
    </div>
}

export const CharacterDetailView = ({ character }: { character: Character }) => {
  return <div data-testid="detail-view">
    <h2>{character.name}</h2>
    <img src={character.imageUrl} alt={character.name} />
    <CharacterDetailList values={character.allies} heading={"Allies"} />
    <CharacterDetailList values={character.enemies} heading={"Enemies"} />
    <CharacterDetailList values={character.shortFilms} heading={"Short Films"} />
    <CharacterDetailList values={character.tvShows} heading={"TV Shows"} />
    <CharacterDetailList values={character.videoGames} heading={"Video Games"} />
    <CharacterDetailList values={character.parkAttractions} heading={"Park Attractions"} />
  </div>
}