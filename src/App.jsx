import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddEditPrompt from "./pages/AddEditPrompt.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.jsx";
import SidebarLayout from "./components/layouts/sidebar.jsx";
import DefaultLayout from "./components/layouts/default.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
          <Router>
            <Routes>
              <Route path="/" element={<SidebarLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="add" element={<DefaultLayout><AddEditPrompt /></DefaultLayout>} />
                <Route path="edit/:id" element={<DefaultLayout><AddEditPrompt /></DefaultLayout>} />
              </Route>
            </Routes>
          </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;