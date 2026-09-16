import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.tsx';
import BlogIndexPage from './pages/BlogIndexPage.tsx';
import BlogArticlePage from './pages/BlogArticlePage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
