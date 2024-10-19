import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';

import { learnStore } from './redux/learnstore.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <Provider store={learnStore}>
      <App />
    </Provider>
    {/* <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider> */}
  </StrictMode>,
);
