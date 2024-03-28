import { CharacterDetailView } from "@/components/CharacterDetailView";
import { characterFixture } from "../../test/fixtures/character";
import { render, screen } from "@testing-library/react";

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

  it("renders character allies", () => {
    render(<CharacterDetailView character={character} />)

    expect(screen.getByRole("heading", {name: "Allies"})).toBeInTheDocument()
    character.allies.forEach((ally => expect(screen.getByRole("listitem", {name: ally})).toBeInTheDocument()))
  })
})