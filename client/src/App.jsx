import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TareasPage } from './pages/TareasPage';
import { TareasFormPage } from './pages/TareasFormPage';
import { Navigation } from './components/Navigation';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tareas" />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/tareas-create" element={<TareasFormPage />} />
          <Route path="/tareas/:id" element={<TareasFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}
export default App 