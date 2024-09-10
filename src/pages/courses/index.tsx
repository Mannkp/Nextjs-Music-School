import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import coursesData from "@/data/music_courses.json";
import { GetStaticProps } from "next";

function coursesPage({ coursesData }: { coursesData: coursesData }) {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-white text-5xl text-center">
        All Courses {coursesData?.courses?.length}
      </h1>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto items-stretch gap-4">
        {coursesData?.courses?.map((course, index: number) => {
          return (
            <>
              <CardContainer
                className="hidden md:block inter-var m-4"
                key={index * 3 + 2}
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    as="h3"
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course?.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course?.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course?.image}
                      height="1000"
                      width="1000"
                      priority={false}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course?.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={`/courses/` + course?.slug}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Visit now →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              <div
                className="card-for-mobile block md:hidden m-4"
                key={index * 2 + 1}
              >
                <div className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
                    {course?.title}
                  </h3>
                  <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {course?.description}
                  </p>
                  <div className="w-full mt-4">
                    <Image
                      src={course?.image}
                      height="1000"
                      width="1000"
                      priority={false}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course?.title}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-20">
                    <Link
                      href={`/courses/` + course?.slug}
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Visit now →
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default coursesPage;

type coursesData = {
  courses: {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  }[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      coursesData,
    },
  };
};
