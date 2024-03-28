import { http, HttpResponse, passthrough } from "msw"
import { CHARACTER_PAGE_1, CHARACTER_PAGE_2 } from "./character-pages";

export const characterGet = jest.fn()

export const characterHandler = [http.get("https://api.disneyapi.dev/character", ({request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.get("page")
  characterGet()

  if (page === "2") {
    return HttpResponse.json(CHARACTER_PAGE_2)
  }
  return HttpResponse.json(CHARACTER_PAGE_1)
})]