import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home | New Remix App" }];
};

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 gap-4">
      <h1 className="text-4xl font-bold text-center text-blue-500">
        New Remix App
      </h1>
      <p className="text-center text-lg">
        This is a new Remix app bootstrapped with Remix, TypeScript and Tailwind
        CSS.
      </p>
    </main>
  );
}
