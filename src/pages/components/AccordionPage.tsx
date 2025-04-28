import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { TypographyH1, TypographyLead, TypographyH3, TypographyP } from "@/components/ui/typography"

const AccordionPage = () => {
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
            <CardDescription>Click on any item to expand or collapse its content.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md bg-white p-4">
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
