import Home from "@/app/page";
import { render, screen, waitFor } from "@testing-library/react";
import { characterGet } from "../../mocks/character/character";
import { CHARACTER_PAGE_1 } from "../../mocks/character/character-pages";

describe("Home", () => {
  it("renders list of characters", async () => {
    render(<Home />)

    expect(screen.getByText("Loading...")).toBeInTheDocument()

    await waitFor(() => expect(characterGet).toHaveBeenCalledTimes(1))

    expect(await screen.findByRole("button", {name: CHARACTER_PAGE_1.data[0].name})).toBeInTheDocument()
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  })
})