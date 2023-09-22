import Container from "@/components/ui/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="">
      <Container>
        <div className="flex justify-end"></div>
        <div className="mt-20 flex flex-col justify-center items-center text-center">
          <h1 className="text-[#202124] max-w-[600px] text-4xl md:text-6xl font-medium">
            Welcome To Your Gallery
          </h1>
          <span>
            <Link
              className="py-3 transition duration-200 mt-8 flex items-center gap-2 font-medium text-white bg-[green] text-sm px-6 hover:bg-opacity-60 rounded-[4px]"
              href="/gallery"
            >
              Go to Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </span>
        </div>
        <div></div>
      </Container>
    </main>
  );
}
