
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

const DefaultAccordion = () => {
  return (
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
              src="/lovable-uploads/033fa86c-a244-4281-a734-83c00b61c552.png" 
              alt="Styled accordion example" 
              className="rounded-lg"
            />
            <p>This accordion item contains both text and an image to demonstrate how different types of content can be displayed.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default DefaultAccordion
