import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import FetchNew from './pages/FetchNew';
import FetchOld from './pages/FetchOld';
import Home from './pages/Home';

import './ReactQuery.css';

const ReactQuery = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/fetch-new" element={<FetchNew />} />
          <Route path="/fetch-old" element={<FetchOld />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQuery;
