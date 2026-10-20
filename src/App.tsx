import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import BrandDetails from "./pages/BrandDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-black transition-colors">

            <Routes>
              <Route path="/login" element={<Login />} />

              <Route
                path="/"
                element={
                  <>
                    <Navbar theme={theme} setTheme={setTheme} />
                    <Home />
                  </>
                }
              />

              <Route
                path="/brands"
                element={
                  <>
                    <Navbar theme={theme} setTheme={setTheme} />
                    <Brands />
                  </>
                }
              />

              <Route
                path="/brands/:brandName"
                element={
                  <>
                    <Navbar theme={theme} setTheme={setTheme} />
                    <BrandDetails />
                  </>
                }
              />

              <Route
                path="/contact"
                element={
                  <>
                    <Navbar theme={theme} setTheme={setTheme} />
                    <Contact />
                  </>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>

          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
