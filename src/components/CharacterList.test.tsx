import { render, screen } from "@testing-library/react";
import { Character } from "@/types/character";
import { CharacterListView } from "@/components/CharacterList";
import { characterFixture } from "../../test/fixtures/character";

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