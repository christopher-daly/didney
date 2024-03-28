import { render, screen } from "@testing-library/react";
import { Character } from "@/types/character";
import { faker } from '@faker-js/faker';
import { CharacterListView } from "@/components/CharacterList";

function characterFixture() {
  return {
    _id: faker.number.int(),
    films: [faker.word.noun()],
    shortFilms: [faker.word.noun()],
    tvShows: [faker.word.noun()],
    videoGames: [faker.word.noun()],
    parkAttractions: [faker.word.noun()],
    allies: [faker.person.firstName()],
    enemies: [faker.person.firstName()],
    name: faker.person.fullName(),
    imageUrl: faker.internet.url(),
    url: faker.internet.url()
  };
}

describe("CharacterList", () => {
  const characters: Character[] = [characterFixture(), characterFixture()]

  it("displays character names", () => {
    render(<CharacterListView characters={characters} />)

    characters.forEach(character => {
      expect(screen.getByRole("button", {name: character.name})).toBeInTheDocument()
      expect(screen.getByRole("img", {name: character.name})).toHaveAttribute("src", character.imageUrl)
    })
  })
})