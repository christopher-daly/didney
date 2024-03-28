'use client'
import { useEffect, useState } from "react";
import { GetCharactersApiResponse } from "@/types/api";
import { CharacterListView } from "@/components/CharacterList";

export default function Home() {
  const [pageUrl, setPageUrl] = useState<string>("https://api.disneyapi.dev/character")
  const [characterData, setCharacterData] = useState<GetCharactersApiResponse | null>(null)

  useEffect(() => {
    if (!characterData) {
      fetch(pageUrl).then(res => res.json()).then(res => {
        setCharacterData(res)
      })
    }
  }, [characterData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {characterData ? <CharacterListView characters={characterData?.data} /> : <div>Loading...</div>}
      {characterData?.info.previousPage && <button onClick={() => {
        if (characterData?.info.previousPage) {
          setPageUrl(characterData?.info.previousPage);
          setCharacterData(null)
        }
      }}>Back</button>}
      {characterData?.info.nextPage && <button onClick={() => {
        if (characterData?.info.nextPage) {
          setPageUrl(characterData?.info.nextPage);
          setCharacterData(null)
        }
      }}>Next</button>}
    </main>
  );
}
