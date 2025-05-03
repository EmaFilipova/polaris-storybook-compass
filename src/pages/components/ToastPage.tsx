
import React from 'react';
import { Check } from 'lucide-react';
import { toast } from "@/components/ui/sonner";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const ToastPage = () => {
  const { toast: hookToast } = useToast();

  const showSonnerToast = (type: string) => {
    switch (type) {
      case 'default':
        toast("Task created", {
          position: "bottom-right",
          className: "custom-toast",
        });
        break;
      case 'description':
        toast("A good toast message is short and to the point. It should very rarely include multiple paragraphs.", {
          position: "bottom-right",
          className: "custom-toast",
        });
        break;
      case 'loading':
        toast("Odio morbi quis commodo", {
          position: "bottom-right",
          className: "custom-toast",
        });
        break;
      case 'success':
        toast(
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="rounded-full bg-[#3B3B3B] p-2 border-2 border-white">
                <Check className="h-6 w-6 text-white" />
              </div>
            </div>
            <p>Your newspaper is ready for print</p>
          </div>,
          {
            position: "bottom-right",
            className: "custom-toast success-toast",
          }
        );
        break;
      case 'success-simple':
        toast(
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="rounded-full bg-[#3B3B3B] p-2">
                <Check className="h-6 w-6 text-white" />
              </div>
            </div>
            <p>Your newspaper is ready for print</p>
          </div>,
          {
            position: "bottom-right",
            className: "custom-toast",
          }
        );
        break;
    }
  };

  const showHookToast = (type: string) => {
    switch (type) {
      case 'default':
        hookToast({
          title: "Task created",
          variant: "default",
          className: "toast-component",
        });
        break;
      case 'description':
        hookToast({
          title: "A good toast message is short and to the point.",
          description: "It should very rarely include multiple paragraphs.",
          variant: "default",
          className: "toast-component",
        });
        break;
      case 'success':
        hookToast({
          title: "Your newspaper is ready for print",
          variant: "default",
          className: "toast-component success",
        });
        break;
    }
  };
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Toast Component</h1>
      
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Sonner Toast Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => showSonnerToast('default')}>Show Simple Toast</Button>
          <Button onClick={() => showSonnerToast('description')}>Show Description Toast</Button>
          <Button onClick={() => showSonnerToast('loading')}>Show Loading Toast</Button>
          <Button onClick={() => showSonnerToast('success')}>Show Success Toast (with border)</Button>
          <Button onClick={() => showSonnerToast('success-simple')}>Show Success Toast (simple)</Button>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Radix Toast Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => showHookToast('default')}>Show Simple Toast</Button>
          <Button onClick={() => showHookToast('description')}>Show Description Toast</Button>
          <Button onClick={() => showHookToast('success')}>Show Success Toast</Button>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Toast Design Specifications</h2>
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="font-medium mb-2">Layout</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Width: 360px</li>
            <li>Padding: 32px</li>
            <li>Border-radius: 2px</li>
            <li>Border: 2px solid #DE911D (warning color)</li>
            <li>Background: #3B3B3B</li>
            <li>Text color: White</li>
          </ul>
          
          <h3 className="font-medium mb-2">Spacing</h3>
          <ul className="list-disc pl-5">
            <li>Gap: 32px</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToastPage;
