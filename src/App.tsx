
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import AccordionPage from "./pages/components/AccordionPage"
import ButtonPage from "./pages/components/ButtonPage"
import CheckboxPage from "./pages/components/CheckboxPage"
import DateSelectPage from "./pages/components/DateSelectPage"
import AvatarPage from "./pages/components/AvatarPage"
import TooltipPage from "./pages/components/TooltipPage"
import ToggleSwitchPage from "./pages/components/ToggleSwitchPage"

const queryClient = new QueryClient()

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
          <Route path="/components/check-box" element={<CheckboxPage />} /> {/* Added this route as an alternative */}
          <Route path="/components/date-select" element={<DateSelectPage />} />
          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/tooltip" element={<TooltipPage />} />
          <Route path="/components/toggle" element={<ToggleSwitchPage />} />
          <Route path="/components/toggle-switch" element={<ToggleSwitchPage />} /> {/* Alternative route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
