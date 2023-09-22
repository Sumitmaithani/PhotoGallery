"use client";

import Container from "@/components/ui/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function GalleryHeader() {
  const pathname = usePathname();
  return (
    <div className="pt-[68px] border-b border-b-gray-100 mb-3 pb-3">
      <Container>
        <div className="flex items-center gap-2 justify-between">
          <span>
            <Link className="flex items-center gap-1" href="/gallery">
              <h1 className="text-xl md:text-2xl font-bold">Gallery</h1>
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
}
