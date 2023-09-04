import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Index() {
  return (
    <main className="grid min-h-screen bg-rose-100">
      <div className="mx-auto grid max-w-7xl grid-cols-7">
        <article className="col-span-4 grid place-content-center gap-8">
          <h1 className="font-serif text-6xl font-black ">
            Mehndi and Bridal Makeup for your upcoming event.
          </h1>
          <p className="font-mono text-xl text-stone-600">
            We specialize in crafting enchanting Mehndi designs that tell your
            unique story and enhancing your natural radiance with flawless
            makeup. Let us be a part of your journey, as we create Mehndi
            masterpieces and bring out your inner beauty, making your bridal
            experience truly magical.
          </p>
          <Link
            to="/book"
            className="group flex w-fit items-center justify-center gap-2 bg-primary px-6 py-3 text-primary-foreground hover:animate-pulse"
          >
            <span className="text-lg font-medium">Book Now</span>
            <ArrowRight className="transition-all duration-150 group-hover:ml-4" />
          </Link>
        </article>
        <div className="group relative col-span-3 flex justify-end ">
          <Button
            variant="secondary"
            className="absolute bottom-0 left-0 right-0 top-0 z-20 m-auto w-fit"
          >
            click to explore
          </Button>
          <img
            src="https://s3.fabweddings.in/storage/gallery-photos/kundan-jewellery-nose-ring-bridal-makeup-jewellery-bride-nose.jpg"
            alt="bride"
            loading="lazy"
            className="rounded-full object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 lg:p-16"
          />
        </div>
      </div>
    </main>
  );
}
