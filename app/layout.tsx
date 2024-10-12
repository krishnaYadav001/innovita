import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "./context/user";
import AllOverLays from "./components/AllOverLays";



export const metadata: Metadata = {
  title: "innovita",
  description: "innovita",
};

export default function RootLayout({ children } : { children: React.ReactNode }){
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <AllOverLays />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
