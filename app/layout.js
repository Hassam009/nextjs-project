
import "../styles/app.scss"; 
import header from "./header";


export const metadata = {
  title: "Nexjs-Project",
  description: "Todo App Project to learn Next js Concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body >
      <header></header>
        {children}</body>
    </html>
  );
}
