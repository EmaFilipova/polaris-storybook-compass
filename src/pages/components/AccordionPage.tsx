
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";

export default function AccordionPage() {
  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div>
          <TypographyH1>Accordion</TypographyH1>
          <TypographyLead>A vertically stacked set of interactive headings that each reveal a section of content.</TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Default Accordion</CardTitle>
            <CardDescription>
              Click on the items to expand/collapse the content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Is it accessible?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Is it styled?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Is it animated?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multiple Expanded Items</CardTitle>
            <CardDescription>
              Configure the accordion to allow multiple items to be expanded simultaneously.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  First section
                </AccordionTrigger>
                <AccordionContent>
                  This accordion can have multiple sections open at the same time. Try clicking on another section without closing this one.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Second section
                </AccordionTrigger>
                <AccordionContent>
                  By setting the type prop to "multiple", we allow users to expand multiple sections simultaneously.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Third section
                </AccordionTrigger>
                <AccordionContent>
                  This is useful for interfaces where users might want to compare content across multiple sections.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
