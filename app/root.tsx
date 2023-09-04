import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

// https://remix.run/docs/en/main/route/meta-v2
// https://remix.run/docs/en/main/pages/v2#updating-to-the-new-meta
export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { property: "og:title", content: "New Remix App" },
    {
      name: "description",
      content:
        "New Remix App is bootstrapped with Remix, TypeScript and Tailwind CSS.",
    },
    {
      property: "og:description",
      content:
        "New Remix App is bootstrapped with Remix, TypeScript and Tailwind CSS.",
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
