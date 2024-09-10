import Link from "next/link";
import React from "react";
// import data from "../../data/music_courses.json";
import { BackgroundGradient } from "../ui/background-gradient";

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

const FeaturedCourses = ({ data }: { data: CoursesData }) => {
  const FilteredCourses = data?.courses?.filter(
    (item: Course) => item?.isFeatured
  );

  return (
    <div className="text-white py-24 bg-gray-900 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the Best
          </p>
        </div>
      </div>
      <div className="mt-16 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
          {FilteredCourses?.map((item: Course, index: number) => (
            <div className="flex justify-center" key={index * 5}>
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl m-2 text-neutral-200">
                    {item?.title}
                  </p>
                  <p className="text-sm text-neutral-400 flex-grow">
                    {item?.description}
                  </p>
                  <Link
                    href={`/courses/${item?.slug}`}
                    className="px-4 py-2 mt-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center container mx-auto">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
