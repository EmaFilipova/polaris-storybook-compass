
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Toggle } from "@/components/ui/toggle"
import { TypographyH1, TypographyLead, TypographyH3, TypographyP } from "@/components/ui/typography"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Edit } from "lucide-react"
import { cn } from "@/lib/utils"

// Custom styled accordion that matches the design in the image
const StyleAccordion = () => {
  const [open, setOpen] = useState<string>("item-1")
  
  const items = [
    { id: "item-1", title: "Accordion title", timestamp: "v. 12-07 12:45", expanded: true },
    { id: "item-2", title: "Accordion title", timestamp: "v. 12-07 12:45" },
    { id: "item-3", title: "Accordion title", timestamp: "v. 12-07 12:45" },
    { id: "item-4", title: "Accordion title", timestamp: "v. 12-07 12:45" },
    { id: "item-5", title: "Accordion title", timestamp: "v. 12-07 12:45" },
  ]

  const renderAccordionContent = (itemId: string) => {
    if (itemId === "item-1") {
      return (
        <div className="py-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Edit className="h-4 w-4 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <img 
                    src="/lovable-uploads/e732c47b-1f49-43f8-b8e7-f613fcdae287.png" 
                    alt="User avatar"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="font-semibold text-gray-800">Toren Barrios</div>
              </div>
              <p className="mt-1 text-gray-700">
                <span className="font-semibold">edited</span> story variant in the Facebook channel
              </p>
            </div>
          </div>
        </div>
      )
    }
    
    return (
      <div className="py-4">
        <p>Content for this accordion item goes here. You can add any elements like text, images, or other components.</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" value={open} onValueChange={setOpen} className="w-full">
        {items.map((item) => (
          <AccordionItem 
            key={item.id} 
            value={item.id}
            className={cn(
              "overflow-hidden mb-2",
              "rounded-md",
              open === item.id ? "bg-white border-blue-500" : "bg-white border border-gray-300",
            )}
          >
            <AccordionTrigger 
              className={cn(
                "px-4 hover:no-underline",
                open === item.id ? "text-blue-700 border-b border-b-blue-500 rounded-t-md" : "text-black",
              )}
            >
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-2">
                  <ChevronDown className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    open === item.id ? "text-blue-600" : "text-gray-600"
                  )} />
                  <span className={cn(
                    "text-base font-medium", 
                    open === item.id ? "text-blue-700" : "text-black"
                  )}>
                    {item.title}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{item.timestamp}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white border-transparent px-4">
              {renderAccordionContent(item.id)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const AccordionPage = () => {
  const [accordionType, setAccordionType] = useState<"default" | "styled">("styled")

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
              {accordionType === "default" ? (
                <Accordion type="single" collapsible className="w-full">
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
              ) : (
                <StyleAccordion />
              )}
            </div>
          </CardContent>
        </Card>

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

        <Card>
          <CardHeader>
            <CardTitle>Properties</CardTitle>
            <CardDescription>Available customization options for the Accordion component.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-1.5">
                <TypographyP className="font-semibold">Colour</TypographyP>
                <TypographyP>White, Blue, Transparent</TypographyP>
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
