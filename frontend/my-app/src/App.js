import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import ListBoard from './pages/ListBoard';
import CardBoard from './pages/CardBoard';
import SweetHome from './pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SweetHome />} />
        <Route path="/list" element={<ListBoard />} />
        <Route path="/card" element={<CardBoard />} />
      </Routes>
    </Layout >
  );
}

export default App;