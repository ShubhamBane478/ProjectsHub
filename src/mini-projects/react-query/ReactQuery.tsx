import React from "react";
import { Routes, Route } from "react-router-dom";
import FetchOld from "./pages/FetchOld";
import FetchNew from "./pages/FetchNew";
import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQuery = () => {
  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="trad" element={<FetchOld />} />
        <Route path="rq" element={<FetchNew />} />
      </Route>
    </Routes>
    </QueryClientProvider>
    
  );
};

export default ReactQuery;
