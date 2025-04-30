
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import StyleAccordion from "./StyleAccordion"
import DefaultAccordion from "./DefaultAccordion"

const AccordionInteractiveExample = () => {
  const [accordionType, setAccordionType] = useState<"default" | "styled">("styled")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Example</CardTitle>
        <CardDescription>Select the type of accordion to display.</CardDescription>
        <div className="flex items-center space-x-2 pt-2">
          <ToggleGroup type="single" value={accordionType} onValueChange={(value) => value && setAccordionType(value as "default" | "styled")}>
            <ToggleGroupItem value="styled" aria-label="Styled">Styled</ToggleGroupItem>
            <ToggleGroupItem value="default" aria-label="Default">Default</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md p-4 border">
          {accordionType === "default" ? <DefaultAccordion /> : <StyleAccordion />}
        </div>
      </CardContent>
    </Card>
  )
}

export default AccordionInteractiveExample
