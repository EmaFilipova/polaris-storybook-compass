
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { TypographyH1, TypographyLead, TypographyH3, TypographyP } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const AccordionPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<string | null>("item-1")

  const handleAccordionChange = (value: string) => {
    setActiveIndex(value === activeIndex ? null : value)
  }

  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-6">
        <div>
          <TypographyH1>Accordion</TypographyH1>
          <TypographyLead>
            Accordions are interactive components that allow users to expand and collapse sections of content, 
            providing a way to manage and navigate large amounts of information without overwhelming the interface.
          </TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Preview</CardTitle>
            <CardDescription>
              A live demonstration of the accordion component showing its functionality.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="rounded-md bg-white p-4 border border-gray-200">
                  <Accordion 
                    type="single" 
                    collapsible 
                    className="w-full" 
                    value={activeIndex || undefined}
                    onValueChange={handleAccordionChange}
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What is an accordion component?
                      </AccordionTrigger>
                      <AccordionContent>
                        An accordion is a vertically stacked set of interactive headings that each reveal a section of content. 
                        It's useful when you want to toggle between hiding and showing large amounts of content.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        When should I use an accordion?
                      </AccordionTrigger>
                      <AccordionContent>
                        Use accordions when you need to organize related information in a limited space. They're particularly 
                        useful for FAQs, product descriptions, or navigation menus where you want to show one section at a time.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        What's inside this accordion?
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <img 
                            src="/lovable-uploads/c45cfb53-7617-4648-806b-438bcde6a1a2.png" 
                            alt="Coffee cup" 
                            className="rounded-lg"
                          />
                          <p>This accordion item contains both text and an image to demonstrate how different types of content can be displayed.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                <TypographyH3 className="text-lg">Component Interaction</TypographyH3>
                <div className="space-y-2">
                  <TypographyP>Currently active: {activeIndex ? `Item ${activeIndex.split('-')[1]}` : "None"}</TypographyP>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      size="sm" 
                      variant={activeIndex === "item-1" ? "default" : "outline"} 
                      onClick={() => handleAccordionChange("item-1")}
                    >
                      Toggle Item 1
                    </Button>
                    <Button 
                      size="sm" 
                      variant={activeIndex === "item-2" ? "default" : "outline"} 
                      onClick={() => handleAccordionChange("item-2")}
                    >
                      Toggle Item 2
                    </Button>
                    <Button 
                      size="sm" 
                      variant={activeIndex === "item-3" ? "default" : "outline"}
                      onClick={() => handleAccordionChange("item-3")}
                    >
                      Toggle Item 3
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      onClick={() => setActiveIndex(null)}
                    >
                      Collapse All
                    </Button>
                  </div>
                </div>

                <Separator className="my-4" />
                
                <TypographyH3 className="text-lg">How It Works</TypographyH3>
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
                  <div className="flex items-center justify-between space-x-4">
                    <TypographyP className="font-medium">Accordion Implementation</TypographyP>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-xs text-muted-foreground">
                        <code>{`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                      </pre>
                    </div>
                    <TypographyP className="text-sm text-muted-foreground">
                      The accordion uses Radix UI under the hood for accessibility. 
                      It supports keyboard navigation and follows WAI-ARIA design patterns.
                    </TypographyP>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Properties</CardTitle>
            <CardDescription>Available customization options for the Accordion component.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-1.5">
                <TypographyP className="font-semibold">Colour</TypographyP>
                <TypographyP>White, Grey, Transparent</TypographyP>
              </div>
              <Separator />
              <div className="space-y-1.5">
                <TypographyP className="font-semibold">Expanded</TypographyP>
                <TypographyP>No, Yes</TypographyP>
              </div>
              <Separator />
              <div className="space-y-1.5">
                <TypographyP className="font-semibold">Inner shadow</TypographyP>
                <TypographyP>Yes, No</TypographyP>
              </div>
              <Separator />
              <div className="space-y-1.5">
                <TypographyP className="font-semibold">Transparent content</TypographyP>
                <TypographyP>Yes, No</TypographyP>
              </div>
              <Separator />
              <div className="space-y-1.5">
                <TypographyP className="font-semibold">Version</TypographyP>
                <TypographyP>True, False</TypographyP>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AccordionPage
