import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Link from "next/link";
import LeftSideBar from "./_components/LeftSideBar";
import { getToken } from "./_lib/token";
import RightSideBar from "./_components/RightSideBar";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Optional for dev
import { Providers } from "./_hooks/QueryClient";

// Create a client instance (singleton for hydration)
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 min stale time
      retry: 3,
      refetchOnWindowFocus: false, // Customize for your app
    },
  },
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "A simple social media app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getToken()


  return (
    <html lang="en">
      <body>



        <div className="min-h-screen bg-gray-50">
          <Navbar />

          <div className="flex flex-row">

            {session &&
              <div className="container ml-auto mt-10 ms-10 w-1/4 text-center">
                <LeftSideBar />
              </div>}


            <main className="container mx-auto  px-4 py-8 ">
              <Providers>
                {children}
              </Providers>

            </main>

            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"

            />



            {session &&
              <div className="container ml-auto mt-10 w-1/4 text-center ">
                <RightSideBar />
              </div>}


          </div>


        </div>

      </body>
    </html>
  );
}
