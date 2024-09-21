"use client"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from '../theme';
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import Navbar from "./_components/navbar";
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { Toaster } from 'react-hot-toast';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      ><AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
        <Navbar />
        {children}
         <Toaster/>
          </Provider>

        </ThemeProvider>

      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
