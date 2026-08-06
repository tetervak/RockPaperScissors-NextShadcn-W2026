import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowBigRightIcon } from "lucide-react"

export default function HomePage() {
  return (
        <>
          <h1  className="text-4xl text-green-700">Rock Paper Scissors</h1>
          <Button className="mt-4" asChild>
            <Link href="/game-start">Start Game<ArrowBigRightIcon/></Link>
          </Button>
        </>
  )
}
