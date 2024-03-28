'use client'
import { ReactNode, useEffect, useState } from "react";
import { GetCharactersApiResponse } from "@/types/api";
import { CharacterListView } from "@/components/CharacterList";
import { Character } from "@/types/character";
import { CharacterDetailView } from "@/components/CharacterDetailView";

const Navigation = ({ previousPage, nextPage, onNavigate }: {
  previousPage?: string | null,
  nextPage?: string | null,
  onNavigate: (url: string) => void
}) => {

  return <div>
    {previousPage && <button onClick={() => onNavigate(previousPage)}>Back</button>}
    {nextPage && <button onClick={() => onNavigate(nextPage)}>Next</button>}
  </div>
}

const MainWrapper = (props: { children: ReactNode }) => {
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {props.children}
  </main>
}

export default function Home() {
  const [pageUrl, setPageUrl] = useState<string>("https://api.disneyapi.dev/character")
  const [characterData, setCharacterData] = useState<GetCharactersApiResponse | null>(null)
  const [shownCharacter, setShownCharacter] = useState<Character | null>(null)

  useEffect(() => {
    if (!characterData) {
      fetch(pageUrl).then(res => res.json()).then(res => {
        setCharacterData(res)
      })
    }
  }, [characterData]);

  const selectCharacter = (selected: Character) => {
    setShownCharacter(selected)
  }

  if (!characterData) return <MainWrapper>
    <div>Loading...</div>
  </MainWrapper>

  if (shownCharacter) return <MainWrapper>
    <button onClick={() => setShownCharacter(null)}>Close</button>
    <CharacterDetailView character={shownCharacter} />
  </MainWrapper>

  return (
    <MainWrapper>
      <CharacterListView characters={characterData?.data} onClick={selectCharacter} />
      <Navigation onNavigate={(url: string) => {
        setPageUrl(url);
        setCharacterData(null)
      }} nextPage={characterData?.info.nextPage} previousPage={characterData?.info.previousPage} />
    </MainWrapper>
  );
}
