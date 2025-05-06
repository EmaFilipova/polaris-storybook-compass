
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TypographyH1, TypographyLead, TypographyH3, TypographyP } from "@/components/ui/typography";
import { SegmentedControl } from "@/components/ui/segmented-control";

export default function SegmentedControlPage() {
  const [timeValue, setTimeValue] = useState("1d");
  const [viewValue, setViewValue] = useState("day");
  const [layoutValue, setLayoutValue] = useState("label1");
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [tabValue, setTabValue] = useState("all");

  // Time options - Complex example
  const timeOptions = [
    { value: "1d", label: "1D" },
    { value: "5d", label: "5D" },
    { value: "1m", label: "1M" },
    { value: "3m", label: "3M" },
    { value: "6m", label: "6M" },
    { value: "ytd", label: "YTD" },
    { value: "1y", label: "1Y" },
    { value: "5y", label: "5Y" },
    { value: "all", label: "View All" },
  ];

  // View options - Simple example
  const viewOptions = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];

  // Layout options - Regular example
  const layoutOptions = [
    { value: "label1", label: "Label 1" },
    { value: "label2", label: "Label 2" },
  ];

  // Multi-select options
  const multiOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  // Tab options - For equal width example
  const tabOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
    { value: "archived", label: "Archived" },
  ];

  // Equal width options
  const equalOptions = [
    { value: "label1", label: "Label" },
    { value: "label2", label: "Label" },
    { value: "label3", label: "Label" },
    { value: "label4", label: "Label" },
    { value: "label5", label: "Label" },
  ];

  return (
    <div className="container max-w-7xl py-10">
      <div className="space-y-8">
        <div className="space-y-2">
          <TypographyH1>Segmented Control</TypographyH1>
          <TypographyLead>
            Segment control allows users to switch between multiple options
            within a compact horizontal layout. It is ideal for use in view toggles,
            widgets, and grouped navigation where quick selection is needed
            without a dropdown.
          </TypographyLead>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Basic Usage</CardTitle>
            <CardDescription>
              A simple segmented control with basic options.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="space-y-2">
              <TypographyH3 className="text-base">Simple Segmented Control</TypographyH3>
              <SegmentedControl
                items={viewOptions}
                value={viewValue}
                onValueChange={(value) => setViewValue(value as string)}
                itemVariant="blue"
              />
              <TypographyP className="text-sm text-gray-500 mt-2">
                Selected value: {viewValue}
              </TypographyP>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design Examples</CardTitle>
            <CardDescription>
              Examples matching the design in the documentation.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <TypographyH3 className="text-base">Standard Layout</TypographyH3>
                <SegmentedControl
                  items={equalOptions}
                  defaultValue={equalOptions[0].value}
                  className="segmented-control"
                  itemVariant="blue"
                />
              </div>

              <div className="space-y-2">
                <TypographyH3 className="text-base">Selected State (Blue Background)</TypographyH3>
                <SegmentedControl
                  items={[
                    { value: "label1", label: "Label" },
                    { value: "label2", label: "Label" },
                  ]}
                  defaultValue="label1"
                  className="w-[328px]"
                  itemVariant="blue"
                />
              </div>

              <div className="space-y-2">
                <TypographyH3 className="text-base">Full Width Equal Segments</TypographyH3>
                <SegmentedControl
                  items={[
                    { value: "label1", label: "Label" },
                    { value: "label2", label: "Label" },
                    { value: "label3", label: "Label" },
                  ]}
                  defaultValue="label1"
                  fullWidth
                  equal
                  itemVariant="blue"
                />
              </div>

              <div className="space-y-2">
                <TypographyH3 className="text-base">Equal Width with Multiple Items</TypographyH3>
                <SegmentedControl
                  items={[
                    { value: "label1", label: "Label" },
                    { value: "label2", label: "Label" },
                    { value: "label3", label: "Label" },
                    { value: "label4", label: "Label" },
                    { value: "label5", label: "Label" },
                  ]}
                  defaultValue="label1"
                  fullWidth
                  equal
                  itemVariant="blue"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Variants</CardTitle>
            <CardDescription>
              Different styles of segmented controls.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <TypographyH3 className="text-base">Default Variant</TypographyH3>
                <SegmentedControl
                  items={layoutOptions}
                  value={layoutValue}
                  onValueChange={(value) => setLayoutValue(value as string)}
                />
              </div>
              <div className="space-y-2">
                <TypographyH3 className="text-base">Pill Variant</TypographyH3>
                <SegmentedControl
                  items={layoutOptions}
                  value={layoutValue}
                  onValueChange={(value) => setLayoutValue(value as string)}
                  itemVariant="pill"
                  variant="pill"
                />
              </div>
              <div className="space-y-2">
                <TypographyH3 className="text-base">Subtle Variant</TypographyH3>
                <SegmentedControl
                  items={layoutOptions}
                  value={layoutValue}
                  onValueChange={(value) => setLayoutValue(value as string)}
                  itemVariant="subtle"
                />
              </div>
              <div className="space-y-2">
                <TypographyH3 className="text-base">Elevated Variant</TypographyH3>
                <SegmentedControl
                  items={layoutOptions}
                  value={layoutValue}
                  onValueChange={(value) => setLayoutValue(value as string)}
                  variant="elevated"
                  itemVariant="blue"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multiple Selection</CardTitle>
            <CardDescription>
              A segmented control that allows selecting multiple options simultaneously.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SegmentedControl
              type="multiple"
              items={multiOptions}
              value={multiValue}
              onValueChange={(value) => setMultiValue(value as string[])}
              itemVariant="blue"
            />
            <TypographyP className="text-sm text-gray-500">
              Selected values: {multiValue.join(", ") || "none"}
            </TypographyP>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Full Width Tabs</CardTitle>
            <CardDescription>
              A segmented control that expands to fill the available width, useful for tabs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SegmentedControl
              items={tabOptions}
              value={tabValue}
              onValueChange={(value) => setTabValue(value as string)}
              fullWidth
              itemVariant="blue"
            />
            <TypographyP className="text-sm text-gray-500">
              Active tab: {tabValue}
            </TypographyP>
            
            <div className="p-4 bg-gray-100 rounded-lg mt-4">
              <div className="text-sm text-gray-600">
                Full width segmented controls are ideal for tab navigation systems where each option should
                have equal prominence.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complex Example</CardTitle>
            <CardDescription>
              A more complex segmented control with multiple options, ideal for time range selection.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SegmentedControl
              items={timeOptions}
              value={timeValue}
              onValueChange={(value) => setTimeValue(value as string)}
              className="w-full overflow-x-auto segmented-control-scrollable"
              size="sm"
              itemVariant="blue"
            />
            <TypographyP className="text-sm text-gray-500">
              Selected time range: {timeValue}
            </TypographyP>

            <div className="p-4 bg-gray-100 rounded-lg mt-4">
              <div className="text-sm text-gray-600">
                This example demonstrates how segmented controls can be used for time range selection in charts,
                analytics dashboards, and data visualization tools.
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Segmented controls come in different sizes.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <TypographyH3 className="text-base">Small</TypographyH3>
                <SegmentedControl
                  items={layoutOptions}
                  itemSize="sm"
                  size="sm"
                  defaultValue={layoutOptions[0].value}
                  itemVariant="blue"
                />
              </div>
              <div className="space-y-2">
                <TypographyH3 className="text-base">Default</TypographyH3>
                <SegmentedControl
                  items={layoutOptions}
                  defaultValue={layoutOptions[0].value}
                  itemVariant="blue"
                />
              </div>
              <div className="space-y-2">
                <TypographyH3 className="text-base">Large</TypographyH3>
                <SegmentedControl
                  items={layoutOptions}
                  itemSize="lg"
                  size="lg"
                  defaultValue={layoutOptions[0].value}
                  itemVariant="blue"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
