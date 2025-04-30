
import { TypographyH1, TypographyLead } from "@/components/ui/typography"
import AccordionInteractiveExample from "@/components/examples/AccordionInteractiveExample"
import AccordionImplementation from "@/components/examples/AccordionImplementation"
import AccordionProperties from "@/components/examples/AccordionProperties"

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

        <AccordionInteractiveExample />
        <AccordionImplementation />
        <AccordionProperties />
      </div>
    </div>
  )
}

export default AccordionPage
