import Home from "@/app/page";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { characterGet } from "../../mocks/character/character";
import { CHARACTER_PAGE_1, CHARACTER_PAGE_2 } from "../../mocks/character/character-pages";

describe("Home", () => {
  it("renders list of characters", async () => {
    render(<Home />)

    expect(screen.getByText("Loading...")).toBeInTheDocument()

    await waitFor(() => expect(characterGet).toHaveBeenCalledTimes(1))

    expect(await screen.findByRole("button", { name: new RegExp(CHARACTER_PAGE_1.data[0].name) })).toBeInTheDocument()
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  })

  it("supports forward navigation", async () => {
    render(<Home />)

    const nextButton = await screen.findByRole("button", { name: "Next" })

    expect(nextButton).toBeInTheDocument()
    fireEvent.click(nextButton)

    expect(screen.getByText("Loading...")).toBeInTheDocument()

    await waitFor(() => expect(characterGet).toHaveBeenCalledTimes(2))

    expect(await screen.findByRole("button", { name: new RegExp(CHARACTER_PAGE_2.data[0].name) })).toBeInTheDocument()
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
  })

  it("supports backward navigation", async () => {
    render(<Home />)

    const nextButton = await screen.findByRole("button", { name: "Next" })
    fireEvent.click(nextButton)

    const backButton = await screen.findByRole("button", { name: "Back" })
    expect(backButton).toBeInTheDocument()
    fireEvent.click(backButton)
    expect(await screen.findByRole("button", { name: new RegExp(CHARACTER_PAGE_1.data[0].name) })).toBeInTheDocument()
  })

  it("shows character details when clicking character name", async () => {
    render(<Home />)

    const characterButton = await screen.findByRole("button", { name: new RegExp(CHARACTER_PAGE_1.data[0].name) })

    expect(screen.queryByTestId("detail-view")).not.toBeInTheDocument()
    fireEvent.click(characterButton)

    expect(screen.getByTestId("detail-view")).toBeInTheDocument()
    expect(screen.getByRole("button", {name: "Close"})).toBeInTheDocument()
  })

  it("hides character details when clicking close", async () => {
    render(<Home />)

    const characterButton = await screen.findByRole("button", { name: new RegExp(CHARACTER_PAGE_1.data[0].name) })

    fireEvent.click(characterButton)

    expect(screen.getByTestId("detail-view")).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", {name: "Close"}))

    expect(screen.queryByTestId("detail-view")).not.toBeInTheDocument()
  })
})