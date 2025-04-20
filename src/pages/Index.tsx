
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const componentSections = [
  {
    title: "Buttons",
    description: "Click and tap targets for actions",
    variants: [
      <Button>Primary Action</Button>,
      <Button variant="secondary">Secondary</Button>,
      <Button variant="outline">Outline</Button>,
      <Button variant="ghost">Ghost</Button>,
    ],
  },
  {
    title: "Cards",
    description: "Container components for content",
    variants: [
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>A simple container with header</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-polaris-gray-600">Card content goes here</p>
        </CardContent>
      </Card>,
      <Card>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>With action button</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <p className="text-polaris-gray-600">Content with action</p>
          <Button size="sm" variant="ghost">
            Learn More
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>,
    ],
  },
  {
    title: "Typography",
    description: "Text styles and headings",
    variants: [
      <div className="space-y-4 text-left w-full">
        <h1 className="text-4xl font-display font-bold text-polaris-gray-900">Display Heading</h1>
        <h2 className="text-2xl font-semibold text-polaris-gray-900">Section Heading</h2>
        <h3 className="text-xl font-medium text-polaris-gray-800">Subsection Title</h3>
        <p className="text-base text-polaris-gray-600">Body text with regular weight for longer form content and descriptions.</p>
        <p className="text-sm text-polaris-gray-500">Small text for captions and supporting information</p>
      </div>
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-polaris-gray-100">
      <header className="bg-white border-b border-polaris-gray-200 py-8">
        <div className="container max-w-7xl">
          <h1 className="font-display text-4xl font-bold text-gradient mb-2">Polaris Storybook</h1>
          <p className="text-polaris-gray-500 text-lg">A component library inspired by the Polaris design system</p>
        </div>
      </header>

      <main className="container max-w-7xl py-12">
        <div className="grid gap-16">
          {componentSections.map((section, index) => (
            <section key={index} className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-polaris-gray-900 mb-2">{section.title}</h2>
                <p className="text-polaris-gray-500">{section.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.variants.map((variant, vIndex) => (
                  <div key={vIndex} className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-polaris-gray-200 flex items-center justify-center min-h-[120px]">
                    {variant}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-polaris-gray-200 py-6 mt-12 bg-white">
        <div className="container max-w-7xl text-center text-polaris-gray-500">
          Built with React and Tailwind CSS
        </div>
      </footer>
    </div>
  );
};

export default Index;
