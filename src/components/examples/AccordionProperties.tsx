
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TypographyP } from "@/components/ui/typography"

const AccordionProperties = () => {
  return (
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
  )
}

export default AccordionProperties
