import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AdobeFonts from './pages/projects/AdobeFonts';
import Pagliacci from './pages/projects/Pagliacci';
import AmazonDevices from './pages/projects/AmazonDevices';
import Xbox from './pages/projects/Xbox';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/adobe-fonts" element={<AdobeFonts />} />
        <Route path="/projects/pagliacci" element={<Pagliacci />} />
        <Route path="/projects/amazon-devices" element={<AmazonDevices />} />
        <Route path="/projects/xbox" element={<Xbox />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
