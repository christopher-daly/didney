import { CharacterDetailView } from "@/components/CharacterDetailView";
import { characterFixture } from "../../test/fixtures/character";
import { render, screen } from "@testing-library/react";
import { isArray } from "node:util";

describe("CharacterDetailView", () => {
  const character = characterFixture()
  it("renders character name", () => {
    render(<CharacterDetailView character={character} />)

    expect(screen.getByRole("heading", {name: character.name})).toBeInTheDocument()
  })

  it("renders character photo", () => {
    render(<CharacterDetailView character={character} />)

    expect(screen.getByRole("img", {name: character.name})).toHaveAttribute("src", character.imageUrl)
  })

  describe.each([
    ['allies', 'Allies'],
    ['enemies', 'Enemies'],
    ['shortFilms', 'Short Films'],
    ['tvShows', 'TV Shows'],
    ['videoGames', 'Video Games'],
    ['parkAttractions', 'Park Attractions'],
  ])("%s", (objectProp, heading) => {
    const descriptor = Object.getOwnPropertyDescriptor(character, objectProp)
    const objectValue = descriptor?.value

    it(`renders when present`, () => {
      render(<CharacterDetailView character={character} />)

      expect(screen.getByRole("heading", {name: heading})).toBeInTheDocument()
      objectValue.forEach(((prop: any) => expect(screen.getByRole("listitem", {name: prop})).toBeInTheDocument()))
    })

    it(`hides when absent`, () => {
      const newCharacter = {...character, [objectProp]: []}
      render(<CharacterDetailView character={newCharacter} />)

      expect(screen.queryByRole("heading", {name: heading})).not.toBeInTheDocument()
    })
  })
})