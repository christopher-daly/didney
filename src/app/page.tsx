'use client'
import { useEffect, useState } from "react";
import { GetCharactersApiResponse } from "@/types/api";
import { CharacterListView } from "@/components/CharacterList";

export default function Home() {
  const [characterData, setCharacterData] = useState<GetCharactersApiResponse | null>(null)

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character").then(res => res.json()).then(res => {
      setCharacterData(res)
    })
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {characterData ? <CharacterListView characters={characterData?.data} /> : <div>Loading...</div>}
    </main>
  );
}
