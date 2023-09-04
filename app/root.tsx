import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/globals.css";
import { SITE_DESCRIPTION, SITE_TITLE } from "./consts";

// https://remix.run/docs/en/main/route/meta-v2
// https://remix.run/docs/en/main/pages/v2#updating-to-the-new-meta
export const meta: V2_MetaFunction = () => {
  return [
    { title: SITE_TITLE },
    { property: "og:title", content: SITE_TITLE },
    {
      name: "description",
      content: SITE_DESCRIPTION,
    },
    {
      property: "og:description",
      content: SITE_DESCRIPTION,
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
      <body className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-300 scrollbar-thumb-rounded-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
