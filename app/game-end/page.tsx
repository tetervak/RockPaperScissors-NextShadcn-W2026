"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useGame } from "@/context/GameContext"
import { useRouter } from "next/navigation"
import { HomeIcon, SkipBackIcon } from "lucide-react"

export default function GameEnd() {
  const router = useRouter()
  const { gameData, resetGame } = useGame()
  const onPlayAgainClick = () => {
    resetGame()
    router.back()
  }
  return (
    <>
      <h1 className="text-4xl text-green-700">Game End</h1>
      <p className="text-xl">
        <span className="font-bold">User choice:</span>
        <span className="ml-2 text-indigo-600 italic">
          {gameData.userChoice}
        </span>
      </p>
      <p className="text-xl">
        <span className="font-bold">Computer choice:</span>
        <span className="ml-2 text-indigo-600 italic">
          {gameData.computerChoice}
        </span>
      </p>
      <p className="text-xl">
        <span className="font-bold">Result:</span>
        <span className="ml-2 text-orange-400 italic">
          {gameData.gameResult}
        </span>
      </p>
      <p>
        <Button onClick={onPlayAgainClick} className="mt-4">
          <SkipBackIcon />
          Play Again
        </Button>
      </p>
      <p>
        <Button asChild variant="link">
          <Link href="/" className="text-xl">
            <HomeIcon /> Home
          </Link>
        </Button>
      </p>
    </>
  )
}
