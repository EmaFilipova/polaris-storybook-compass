
import React, { useState } from "react"
import { InlineInfo } from "@/components/ui/inline-info"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TypographyH1, TypographyP } from "@/components/ui/typography"
import { toast } from "@/components/ui/sonner"

const InlineInfoPage = () => {
  const [showDismissable, setShowDismissable] = useState(true)

  return (
    <div className="container py-10">
      <TypographyH1 className="mb-6">Inline Information</TypographyH1>
      <TypographyP className="mb-10">
        Inline information components provide contextual feedback messages for typical user actions.
      </TypographyP>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Error Variant */}
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>Used to indicate an error state or alert</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <InlineInfo 
              variant="error"
              title="Fields with the disallowed multiple values detected!"
              description="Excess values will be removed. Excess values will be removed."
              showCloseButton
              onClose={() => toast("Error notification closed")}
            />

            <InlineInfo 
              variant="error"
              description="Fields with disallowed multiple text values are detected. Please filter on fields with the 'multiple text values' to confirm or change which to keep. Excess values will be removed."
              actions={
                <div className="flex gap-2 mt-2">
                  <Button size="sm">Button</Button>
                  <Button size="sm" variant="outline">Button</Button>
                </div>
              }
            />
          </CardContent>
        </Card>

        {/* Warning Variant */}
        <Card>
          <CardHeader>
            <CardTitle>Warning</CardTitle>
            <CardDescription>Used to indicate a warning or caution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <InlineInfo
              variant="warning"
              title="Fields with the disallowed multiple values detected!"
              description="Excess values will be removed. Excess values will be removed."
              showCloseButton
            />
            
            <InlineInfo
              variant="warning"
              description="Fields with disallowed multiple text values are detected. Please filter on fields with the 'multiple text values' to confirm or change which to keep. Excess values will be removed."
              actions={
                <div className="flex gap-2 mt-2">
                  <Button size="sm">Button</Button>
                  <Button size="sm" variant="outline">Button</Button>
                </div>
              }
            />
          </CardContent>
        </Card>

        {/* Info Variant */}
        <Card>
          <CardHeader>
            <CardTitle>Info</CardTitle>
            <CardDescription>Used to display general information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <InlineInfo
              variant="info"
              title="Fields with the disallowed multiple values detected!"
              description="Excess values will be removed. Excess values will be removed."
              showCloseButton
            />
            
            <InlineInfo
              variant="info"
              description="Fields with disallowed multiple text values are detected. Please filter on fields with the 'multiple text values' to confirm or change which to keep. Excess values will be removed."
              actions={
                <div className="flex gap-2 mt-2">
                  <Button size="sm">Button</Button>
                  <Button size="sm" variant="outline">Button</Button>
                </div>
              }
            />
          </CardContent>
        </Card>

        {/* Success Variant */}
        <Card>
          <CardHeader>
            <CardTitle>Success</CardTitle>
            <CardDescription>Used to indicate a successful action</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <InlineInfo
              variant="success"
              title="Fields with the disallowed multiple values detected!"
              description="Excess values will be removed. Excess values will be removed."
              showCloseButton
            />
            
            <InlineInfo
              variant="success"
              description="Fields with disallowed multiple text values are detected. Please filter on fields with the 'multiple text values' to confirm or change which to keep. Excess values will be removed."
              actions={
                <div className="flex gap-2 mt-2">
                  <Button size="sm">Button</Button>
                  <Button size="sm" variant="outline">Button</Button>
                </div>
              }
            />
          </CardContent>
        </Card>
        
        {/* Dismissable Example */}
        <Card>
          <CardHeader>
            <CardTitle>Dismissable</CardTitle>
            <CardDescription>Can be dismissed by the user</CardDescription>
          </CardHeader>
          <CardContent>
            {showDismissable && (
              <InlineInfo
                variant="error"
                title="Fields with the disallowed multiple values detected!"
                description="Excess values will be removed. Excess values will be removed."
                showCloseButton
                onClose={() => setShowDismissable(false)}
              />
            )}
            
            {!showDismissable && (
              <div className="flex justify-center py-4">
                <Button onClick={() => setShowDismissable(true)}>
                  Show Notification Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Without Icon */}
        <Card>
          <CardHeader>
            <CardTitle>Without Icon</CardTitle>
            <CardDescription>Inline info without the leading icon</CardDescription>
          </CardHeader>
          <CardContent>
            <InlineInfo
              variant="error"
              title="Fields with the disallowed multiple values detected!"
              description="Excess values will be removed. Excess values will be removed."
              showIcon={false}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default InlineInfoPage
