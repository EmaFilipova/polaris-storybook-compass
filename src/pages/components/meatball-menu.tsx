
import React from "react"
import { MeatballMenu, MeatballMenuItem } from "@/components/ui/meatball-menu"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

const MeatballMenuPage = () => {
  const basicItems: MeatballMenuItem[] = [
    { label: "Item 1", onClick: () => console.log("Item 1 clicked") },
    { label: "Item 2", onClick: () => console.log("Item 2 clicked") },
    { label: "Item 3", onClick: () => console.log("Item 3 clicked") },
    { label: "Item 4", onClick: () => console.log("Item 4 clicked") },
  ]

  const actionItems: MeatballMenuItem[] = [
    { label: "View", onClick: () => console.log("View clicked") },
    { label: "Download", onClick: () => console.log("Download clicked") },
    { label: "Share", onClick: () => console.log("Share clicked") },
    { label: "Delete", onClick: () => console.log("Delete clicked") },
  ]

  const checkboxItems: MeatballMenuItem[] = [
    { 
      label: "Story", 
      type: "checkbox", 
      checked: true, 
      onClick: () => console.log("Story toggled") 
    },
    { 
      label: "Image", 
      type: "checkbox", 
      checked: true, 
      onClick: () => console.log("Image toggled") 
    },
    { 
      label: "Graph", 
      type: "checkbox", 
      checked: false, 
      onClick: () => console.log("Graph toggled") 
    },
    { 
      label: "Video", 
      type: "checkbox", 
      checked: false, 
      onClick: () => console.log("Video toggled") 
    },
  ]

  const radioItems: MeatballMenuItem[] = [
    { 
      label: "Draft", 
      type: "radio", 
      radioGroup: "status", 
      value: "draft",
      onClick: () => console.log("Draft selected") 
    },
    { 
      label: "Needs review", 
      type: "radio", 
      radioGroup: "status", 
      value: "needs-review",
      onClick: () => console.log("Needs review selected") 
    },
    { 
      label: "Ready", 
      type: "radio", 
      radioGroup: "status", 
      value: "ready",
      onClick: () => console.log("Ready selected") 
    },
    { 
      label: "Published", 
      type: "radio", 
      radioGroup: "status", 
      value: "published",
      onClick: () => console.log("Published selected") 
    },
  ]

  const nestedItems: MeatballMenuItem[] = [
    { label: "Item", onClick: () => console.log("Item clicked") },
    { label: "Item", onClick: () => console.log("Item clicked") },
    { 
      label: "Item", 
      type: "submenu", 
      subItems: [
        { label: "Item", onClick: () => console.log("Nested item clicked") },
        { label: "Item", onClick: () => console.log("Nested item clicked") },
        { label: "Item", onClick: () => console.log("Nested item clicked") },
      ]
    },
    { label: "Item", onClick: () => console.log("Item clicked") },
    { label: "Item", onClick: () => console.log("Item clicked") },
  ]

  const complexItems: MeatballMenuItem[] = [
    { label: "Section 1", type: "label" },
    { label: "Action 1", onClick: () => console.log("Action 1 clicked") },
    { label: "Action 2", onClick: () => console.log("Action 2 clicked") },
    { type: "separator" },
    { label: "Section 2", type: "label" },
    { 
      label: "Options", 
      type: "submenu", 
      subItems: [
        { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
        { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
      ]
    },
    { type: "separator" },
    { 
      label: "Enable feature", 
      type: "checkbox", 
      checked: false, 
      onClick: () => console.log("Feature toggled") 
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Meatball Menu</h1>
        <p className="text-muted-foreground">
          The meatball menu (three-dot menu) is a UI pattern commonly used for contextual actions.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Menu</CardTitle>
            <CardDescription>A simple menu with text items.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-10 border-t">
            <MeatballMenu items={basicItems} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Action Menu</CardTitle>
            <CardDescription>Common actions like view, download, share, and delete.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-10 border-t">
            <MeatballMenu items={actionItems} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checkbox Menu</CardTitle>
            <CardDescription>Menu with toggleable checkbox items.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-10 border-t">
            <MeatballMenu items={checkboxItems} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Radio Menu</CardTitle>
            <CardDescription>Menu with mutually exclusive radio items.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-10 border-t">
            <MeatballMenu items={radioItems} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nested Menu</CardTitle>
            <CardDescription>Menu with nested submenus.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-10 border-t">
            <MeatballMenu items={nestedItems} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complex Menu</CardTitle>
            <CardDescription>Complex menu with labels, separators, and mixed item types.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-10 border-t">
            <MeatballMenu items={complexItems} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MeatballMenuPage
