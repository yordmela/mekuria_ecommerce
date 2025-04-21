import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import KidsPage from './pages/Kids';
import WomenPage from './pages/Women';
import MenPage from './pages/Men';
import LoginPage from './pages/Login';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import AddedProducts from './pages/Admin/AddedProducts';
import AddProductForm from './pages/Admin/Add-Edit';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/added" element={<AddedProducts />} />
        <Route path="/add-product-form" element={<AddProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;