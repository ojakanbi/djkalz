import './globals.css';  

export const metadata = {
  title: 'DJ KALZ',
  description: 'DJ KALZ Protfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
