import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import FormSystem from './components/form/FormSystem'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormSystem />} />
      </Routes>
    </Layout>
  )
}

export default App