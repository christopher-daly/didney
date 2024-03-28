import { faker } from "@faker-js/faker";
import { Character } from "@/types/character";

export function characterListFixture(length: number): Character[] {
  return Array.apply(null, Array(5)).map(() => characterFixture())
}

export function characterFixture(): Character {
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