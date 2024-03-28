import { GetCharactersApiResponse } from "@/types/api";
import { characterListFixture } from "../../test/fixtures/character";

export const CHARACTER_PAGE_1: GetCharactersApiResponse = {
  data: characterListFixture(10),
  info: { count: 10, nextPage: "https://api.disneyapi.dev/character?page=2&count=10", previousPage: null, totalPages: 2 }
}

export const CHARACTER_PAGE_2: GetCharactersApiResponse = {
  data: characterListFixture(10),
  info: { count: 10, nextPage: null, previousPage: "https://api.disneyapi.dev/character?page=1&count=10", totalPages: 2 }
}