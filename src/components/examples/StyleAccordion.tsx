
import { useState } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
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
        <div className="space-y-1">
          {Array(5).fill("EXAMPLE OF TEXT").map((text, index) => (
            <p key={index} className="text-black">{text}</p>
          ))}
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
              open === item.id ? "bg-white border border-blue-500" : "bg-white border border-gray-300",
            )}
          >
            <AccordionTrigger 
              chevronOnly={true}
              className={cn(
                "px-4 hover:no-underline",
                open === item.id ? "text-blue-700" : "text-black",
              )}
            >
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-2">
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

export default StyleAccordion
