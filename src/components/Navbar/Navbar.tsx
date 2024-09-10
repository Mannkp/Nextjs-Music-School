"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Inter } from "next/font/google";
import data from "../../data/music_courses.json";

const inter = Inter({ subsets: ["latin"] });

type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
};

type CoursesData = {
  courses: Course[];
};

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const courseData: CoursesData = data;

  return (
    <div
      className={cn(`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50`, className)}
    >
      <div className={inter.className}>
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href={"/courses"}>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
              <div className="flex flex-col space-y-4 text-sm">
                {courseData &&
                  courseData?.courses?.map((item: Course, index: number) => (
                    <HoveredLink href={"/courses/" + item?.slug} key={index}>
                      {item?.title}
                    </HoveredLink>
                  ))}
              </div>
            </MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Me"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
