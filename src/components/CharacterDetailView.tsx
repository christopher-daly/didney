import { Character } from "@/types/character";

export const CharacterDetailView = ({ character }: { character: Character}) => {
  return <div data-testid="detail-view">
    <h2>{character.name}</h2>
    <img src={character.imageUrl} alt={character.name} />
    <div>
      <h2>Allies</h2>
      <ul>
        {character.allies.map(ally => <li key={ally} aria-label={ally}>{ally}</li>)}
      </ul>
    </div>
  </div>
}