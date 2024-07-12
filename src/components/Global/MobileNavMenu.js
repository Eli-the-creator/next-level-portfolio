"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function MobileNavMenu({ links }) {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="mt-10 space-y-6">
            {links.map((el, idx) => (
              <Link className="block" href={el.href} key={idx}>
                <SheetTitle>{el.name}</SheetTitle>
              </Link>
            ))}
            <ThemeButton />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
