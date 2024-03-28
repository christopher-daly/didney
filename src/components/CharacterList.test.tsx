import { fireEvent, render, screen } from "@testing-library/react";
import { Character } from "@/types/character";
import { CharacterListView } from "@/components/CharacterList";
import { characterFixture } from "../../test/fixtures/character";

describe("CharacterList", () => {
  const characters: Character[] = [characterFixture(), characterFixture()]
  const onClick = jest.fn()

  it("displays character names", () => {
    render(<CharacterListView characters={characters} onClick={onClick} />)

    characters.forEach(character => {
      expect(screen.getByRole("button", {name: new RegExp(character.name)})).toBeInTheDocument()
      expect(screen.getByRole("img", {name: character.name})).toHaveAttribute("src", character.imageUrl)
    })
  })

  it("calls onClick with character when clicked", () => {
    const characterToSelect = characters[0]
    render(<CharacterListView characters={characters} onClick={onClick} />)

    fireEvent.click(screen.getByRole("button", {name: new RegExp(characterToSelect.name)}))

    expect(onClick).toHaveBeenCalledWith(characterToSelect)
  })
})