import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js';
import { ProductPage } from './pages/ProductPage.js';
import { PrivacyPage } from './pages/PrivacyPage.js';
import { TermsPage } from './pages/TermsPage.js';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:slug" element={<ProductPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
