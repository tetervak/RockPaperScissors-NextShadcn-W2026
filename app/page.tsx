import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"
import { ArrowBigRightIcon } from "lucide-react"

export default function Page() {
  return (
        <React.Fragment>
          <h1  className="text-4xl text-green-700">Rock Paper Scissors</h1>
          <Button className="mt-4" asChild>
            <Link href="/game-start">Start Game<ArrowBigRightIcon/></Link>
          </Button>
        </React.Fragment>
  )
}
