
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Apple, ChevronRight } from "lucide-react";

const componentSections = [
  {
    title: "Typography",
    description: "Apple's typography system",
    variants: [
      <div className="space-y-6 text-left w-full">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900">SF Pro Display</h1>
        <h2 className="text-3xl font-medium text-gray-800">Large Title</h2>
        <h3 className="text-2xl font-medium text-gray-700">Headline</h3>
        <p className="text-base text-gray-600">
          Body text with SF Pro Text for longer form content and descriptions. 
          The quick brown fox jumps over the lazy dog.
        </p>
        <p className="text-sm text-gray-500">
          Footnote text for captions and supporting information
        </p>
      </div>
    ],
  },
  {
    title: "Buttons",
    description: "Interactive elements with Apple's design language",
    variants: [
      <Button className="bg-black hover:bg-black/90 text-white">
        <Apple className="mr-2 h-4 w-4" />
        Primary Action
      </Button>,
      <Button variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-900">
        Secondary Action
      </Button>,
      <Button variant="outline" className="border-gray-300">
        Outline Button
      </Button>,
      <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
        Ghost Button
      </Button>,
    ],
  },
  {
    title: "Cards",
    description: "Content containers with Apple's aesthetics",
    variants: [
      <Card className="apple-card w-full">
        <CardHeader>
          <CardTitle className="text-xl font-medium">Simple Card</CardTitle>
          <CardDescription className="text-gray-500">Clean and minimal design</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Essential information displayed elegantly</p>
        </CardContent>
      </Card>,
      <Card className="apple-card w-full">
        <CardHeader>
          <Badge className="w-fit mb-2 bg-gray-100 text-gray-900 hover:bg-gray-200">New</Badge>
          <CardTitle className="text-xl font-medium">Featured Card</CardTitle>
          <CardDescription className="text-gray-500">With additional elements</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <p className="text-gray-600">Discover more about this feature</p>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            Learn More
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>,
    ],
  },
  {
    title: "Colors",
    description: "Apple's color palette and gradients",
    variants: [
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-black"></div>
          <p className="text-sm text-gray-600">Primary Black</p>
        </div>
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-gray-100"></div>
          <p className="text-sm text-gray-600">Light Gray</p>
        </div>
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-white border border-gray-200"></div>
          <p className="text-sm text-gray-600">White</p>
        </div>
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600"></div>
          <p className="text-sm text-gray-600">Gradient</p>
        </div>
      </div>
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200/80 py-12">
        <div className="container max-w-7xl">
          <div className="flex items-center gap-2 mb-2">
            <Apple className="h-8 w-8" />
            <h1 className="font-medium text-4xl text-gradient">Apple Design System</h1>
          </div>
          <p className="text-gray-500 text-lg">A component library inspired by Apple's design language</p>
        </div>
      </header>

      <main className="container max-w-7xl py-16">
        <div className="grid gap-20">
          {componentSections.map((section, index) => (
            <section key={index} className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 mb-2">{section.title}</h2>
                <p className="text-gray-500">{section.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.variants.map((variant, vIndex) => (
                  <div key={vIndex} className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200/50 flex items-center justify-center min-h-[140px]">
                    {variant}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200/80 py-8 mt-20 bg-white">
        <div className="container max-w-7xl text-center text-gray-500">
          Built with React and Tailwind CSS
        </div>
      </footer>
    </div>
  );
};

export default Index;
