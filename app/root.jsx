import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import style from "./assets/style.css?url"
import custom from "./assets/custom.css?url"
import tailwind from "./tailwind.css?url";
import { useEffect } from "react";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    integrity:"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",
    crossOrigin:"anonymous",
    referrerPolicy:"no-referrer",
  },
  {
    rel:"stylesheet",
      href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
      integrity:"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
      crossOrigin:"anonymous",
      referrerPolicy:"no-referrer"
  },
  {
    rel:'stylesheet',
    href:tailwind
  },
  {
    rel: "stylesheet",
    href: style,
  },
  {
    rel: "stylesheet",
    href: custom,
  },
];

export function Layout({ children }) {
  useEffect(() => {
    // Function to handle scrolling to the element with the ID from the URL
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Scroll on initial load if there's a hash in the URL
    scrollToHash();

    // Optional: Scroll on hash change (if you allow internal navigation)
    window.addEventListener('hashchange', scrollToHash);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
