import Navbar from "./components/Navbar";
import PageRoutes from "./routes/page.routes"
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="bg-zinc-900 text-zinc-100">
      <Toaster
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#f4f4f5',
          },
        }}
      />
      <Navbar />
      <PageRoutes />
    </div>
  )
}

export default App
