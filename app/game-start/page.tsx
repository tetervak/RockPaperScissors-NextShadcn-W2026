"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Choice } from "@/domain/game"
import { useRouter } from "next/navigation"
import { useGame } from "@/context/GameContext"
import { HomeIcon, PlayIcon } from "lucide-react"

export default function GameStart() {
  const router = useRouter()
  const { gameData, updateUserChoice, updateComputerChoice, updateGameResult } =
    useGame()

  const onUserChoiceChange = (value: Choice) => {
    console.log("user choice", value)
    updateUserChoice(value)
  }

  const onClickPlay = () => {
    updateComputerChoice()
    updateGameResult()
    router.push("/game-end")
  }

  return (
    <>
      <h1 className="text-4xl text-green-700">Game Start</h1>
      <RadioGroup
        value={gameData.userChoice}
        onValueChange={onUserChoiceChange}
        className="w-fit"
      >
        <div className="flex items-center gap-3">
          <RadioGroupItem value={Choice.ROCK} id="r1" />
          <Label htmlFor="r1" className="text-xl">
            Rock
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value={Choice.PAPER} id="r2" />
          <Label htmlFor="r2" className="text-xl">
            Paper
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value={Choice.SCISSORS} id="r3" />
          <Label htmlFor="r3" className="text-xl">
            Scissors
          </Label>
        </div>
      </RadioGroup>
      <p>
        <Button className="mt-4" onClick={onClickPlay}>
          Play<PlayIcon/>
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
