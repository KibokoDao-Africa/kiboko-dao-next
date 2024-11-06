// layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://r.mobirisesite.com/862220/assets/web/assets/mobirise-icons2/mobirise2.css"
        />
        <link
          rel="stylesheet"
          href="https://r.mobirisesite.com/862220/assets/dropdown/css/style.css"
        />
        <link
          rel="stylesheet"
          href="https://r.mobirisesite.com/862220/assets/socicon/css/styles.css"
        />
        <link
          rel="stylesheet"
          href="https://r.mobirisesite.com/862220/assets/parallax/jarallax.css"
        />

      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
