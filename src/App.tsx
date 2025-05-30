import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccordionPage from "./pages/components/AccordionPage";
import ButtonPage from "./pages/components/ButtonPage";
import CheckboxPage from "./pages/components/CheckboxPage";
import DateSelectPage from "./pages/components/DateSelectPage";
import AvatarPage from "./pages/components/AvatarPage";
import TooltipPage from "./pages/components/TooltipPage";
import ToggleSwitchPage from "./pages/components/ToggleSwitchPage";
import ToastPage from "./pages/components/ToastPage";
import RadioButtonPage from "./pages/components/RadioButtonPage";
import ModalPage from "./pages/components/ModalPage";
import InlineInfoPage from "./pages/components/InlineInfoPage";
import PillPage from "./pages/components/PillPage";
import SegmentedControlPage from "./pages/components/SegmentedControlPage";
import TextAreaPage from "./pages/components/TextAreaPage";
import TextFieldPage from "./pages/components/TextFieldPage";
import MeatballMenuPage from "./pages/components/meatball-menu";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components/accordion" element={<AccordionPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/checkbox" element={<CheckboxPage />} />
          <Route path="/components/check-box" element={<CheckboxPage />} />{" "}
          {/* Added this route as an alternative */}
          <Route path="/components/date-select" element={<DateSelectPage />} />
          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/tooltip" element={<TooltipPage />} />
          <Route path="/components/toggle" element={<ToggleSwitchPage />} />
          <Route
            path="/components/toggle-switch"
            element={<ToggleSwitchPage />}
          />{" "}
          {/* Alternative route */}
          <Route path="/components/toast" element={<ToastPage />} />
          <Route
            path="/components/radio-button"
            element={<RadioButtonPage />}
          />
          <Route path="/components/radio" element={<RadioButtonPage />} />{" "}
          {/* Alternative route */}
          <Route path="/components/modal" element={<ModalPage />} />
          <Route
            path="/components/inline-info"
            element={<InlineInfoPage />}
          />{" "}
          {/* Added new inline-info route */}
          <Route path="/components/pill" element={<PillPage />} />{" "}
          {/* Added new pill route */}
          <Route
            path="/components/segmented-control"
            element={<SegmentedControlPage />}
          />{" "}
          {/* Added new segmented control route */}
          <Route path="/components/textarea" element={<TextAreaPage />} />{" "}
          {/* Added new textarea route */}
          <Route path="/components/text-area" element={<TextAreaPage />} />{" "}
          {/* Adding hyphenated version of the route */}
          <Route
            path="/components/text-field"
            element={<TextFieldPage />}
          />{" "}
          {/* Added new text field route */}
          <Route
            path="/components/textfield"
            element={<TextFieldPage />}
          />{" "}
          {/* Adding non-hyphenated version of the route */}
          <Route
            path="/components/meatball-menu"
            element={<MeatballMenuPage />}
          />{" "}
          {/* Added meatball menu route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
