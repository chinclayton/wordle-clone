"use client"
import { useEffect, useState } from "react";

const keyboardLetters: string[][] = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'back']];
export default function Home() {
  const [letters, setLetters] = useState<string[][]>(
    Array.from({ length: 5 }, () => Array(6).fill('a'))
  );
  useEffect(() => console.log(letters), [])

  return (
    <div className="flex w-dvw flex-col items-center bg-slate-200">
      <div className="flex w-full px-[16px] py-[8px] bg-pink-200">Toolbar</div>
      <div className="flex w-[500px] bg-blue-200 flex-col items-center">
        <div className="grid p-[10px] w-[350px] h-[420px] grid-rows-6 grid-cols-5 gap-[10px]">
          {letters.flat(Infinity).map((item, idx) => (
            <div key={`letter ${idx}`} className="flex items-center justify-center bg-red-200 text-[2rem] font-bold">{item.toString().toUpperCase()}</div>
          ))}
        </div>
        <div className="flex items-center justify-center flex-col w-full px-[8px] mt-[10px]">
          keyboard
        </div>
      </div>
    </div>
  );
}
