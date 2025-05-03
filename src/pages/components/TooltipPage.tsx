
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const TooltipPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tooltip Component</h1>
      
      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Default Tooltip</h2>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  This is a tooltip with helpful information
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tooltip Positions</h2>
          <div className="flex flex-wrap items-center gap-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Tooltip Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  Appears above the element
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Tooltip Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  Appears to the right of the element
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Tooltip Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Appears below the element
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Tooltip Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  Appears to the left of the element
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tooltip with Long Text</h2>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Info className="h-4 w-4 mr-2" />
                    More Information
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Tooltips are brief, informative messages that appear when users hover over, 
                  focus on, or tap an element. They provide helpful context or explanations 
                  without cluttering the interface.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TooltipPage;
