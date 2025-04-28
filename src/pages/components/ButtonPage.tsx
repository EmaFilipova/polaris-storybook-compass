
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyLead, TypographyH3, TypographyP } from "@/components/ui/typography"

export default function ButtonPage() {
  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-6">
        <div>
          <TypographyH1>Button</TypographyH1>
          <TypographyLead>A button component for triggering actions.</TypographyLead>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>Different button variants and sizes.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
