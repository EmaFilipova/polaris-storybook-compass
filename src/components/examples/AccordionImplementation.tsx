
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TypographyH3 } from "@/components/ui/typography"

const AccordionImplementation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Implementation</CardTitle>
        <CardDescription>How to implement the styled accordion component.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <TypographyH3>Styled Accordion Usage</TypographyH3>
          <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
            <pre className="text-sm font-mono">
{`<Accordion type="single" value={open} onValueChange={setOpen} className="w-full">
  <AccordionItem 
    value="item-1" 
    className="rounded-md mb-2 overflow-hidden border border-blue-200 bg-blue-50"
  >
    <AccordionTrigger className="px-4 py-4 hover:no-underline">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <ChevronDown className="h-4 w-4 text-blue-600" />
          <span className="text-base font-medium text-blue-700">Accordion title</span>
        </div>
        <span className="text-sm text-gray-500">v. 12-07 12:45</span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="bg-white border-transparent px-4">
      <div className="py-4">
        <p>Content goes here...</p>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            </pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AccordionImplementation
