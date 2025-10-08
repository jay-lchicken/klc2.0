import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
const geistSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Kids Learn Code",
  description: "Allowing all students to learn coding for free",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased mt-10 min-h-screen flex flex-col`}
      >
      <link rel="icon" type="image/x-icon" href="https://i.ibb.co/DtzhGqz/Kids-Learn-Code-1.png"/>

      <Navigation/>
      <main className="flex-grow">
        {children}
      </main>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="https://app.chatwoot.com";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: 'g3g5wRQDsdNUXUDcJ6mmC38U',
                    baseUrl: BASE_URL
                  })
                }
              })(document,"script");
            `
          }}
      />
      <footer className="footer mt-20 w-full">
        <p className="text-xl font-bold mb-4">Our Partners</p>
        <div className="footer-logos">
          <a href="https://formbricks.com">
            <img src="/footerlogo.e272c0f1.svg" alt="Formbricks" style={{width: "250px"}}/>
          </a>
          <a href="https://bitly.com">
            <img src="/bitly-logo-black-transparent.png" alt="Bitly" style={{width: "120px"}}/>
          </a>
          <a href="">
            <img src="/rulang-primary-school.png" alt="Rulang PS" style={{width: "100px"}}/>
          </a>
          <a href="">
            <img src="/logo.jpg" alt="Anderson PS" style={{width: "200px"}}/>
          </a>
        </div>

      </footer>

      </body>
      </html>

  );
}
