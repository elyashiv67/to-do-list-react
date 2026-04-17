import './App.css'
import {RouterProvider} from "react-router";
import Router from "./Router/Main_R.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {AuthProvider} from "./Router/Context/AuthContext.jsx";
const queryClient = new QueryClient();

function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={Router}/>
            </AuthProvider>
        </QueryClientProvider>
    </>
  )
}

export default App
