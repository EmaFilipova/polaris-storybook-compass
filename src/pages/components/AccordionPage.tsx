
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
            <CardTitle>Preview</CardTitle>
            <CardDescription>Example implementations of the accordion component.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {/* White Background */}
              <div className="space-y-4">
                <TypographyH3>Version History (White)</TypographyH3>
                <div className="rounded-md bg-white p-4">
                  <Accordion type="single" defaultValue="item-1" className="w-full">
                    <AccordionItem value="item-1" className="border-b border-polaris-gray-200">
                      <AccordionTrigger className="flex justify-between hover:no-underline">
                        <span className="text-sm font-medium">Accordion title</span>
                        <span className="text-xs text-polaris-gray-400">v. 12-07 12:45</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <div className="space-y-4">
                          <img src="/lovable-uploads/c45cfb53-7617-4648-806b-438bcde6a1a2.png" alt="Coffee cup" className="rounded-lg" />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              {/* Gray Background */}
              <div className="space-y-4">
                <TypographyH3>Version History (Gray)</TypographyH3>
                <div className="rounded-md bg-polaris-gray-100 p-4">
                  <Accordion type="single" defaultValue="item-1" className="w-full">
                    <AccordionItem value="item-1" className="border-b border-polaris-gray-200">
                      <AccordionTrigger className="flex justify-between hover:no-underline">
                        <span className="text-sm font-medium">Accordion title</span>
                        <span className="text-xs text-polaris-gray-400">v. 12-07 12:45</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 text-sm">
                          <p><strong>Contact person:</strong> Vanesa Rubino</p>
                          <p><strong>Email:</strong> vrubino@shutterstock.com</p>
                          <p><strong>Tel:</strong> +49 151 41449820 (Home-office)</p>
                          <p><strong>URL:</strong> www.shutterstock.com</p>
                          <p><strong>Address:</strong> Shutterstock GmbH,Landsberger Str. 302 80687 München/Shutterstock Inc.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
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

