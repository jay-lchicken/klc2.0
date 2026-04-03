import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FormbricksProvider from "@/app/formbricks.tsx";
import {Suspense} from "react";
import Snow from "@/app/snow.tsx";
import CursorTrail from "@/components/CursorTrail";
import Footer from "@/components/Footer";
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
      <Suspense>
        <FormbricksProvider />
      </Suspense>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased mt-10 min-h-screen flex flex-col`}
      >
      <link rel="icon" type="image/x-icon" href="https://i.ibb.co/DtzhGqz/Kids-Learn-Code-1.png"/>

      <CursorTrail />
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
      <Footer />

      </body>
      </html>

  );
}
