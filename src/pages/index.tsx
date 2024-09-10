import FeaturedCourses from "@/components/FeaturedCourses/FeaturedCourses";
import HeroSection from "@/components/HeroSection/HeroSection";
import Instructors from "@/components/Instructors/Instructors";
import TestimonialCards from "@/components/TestimonialCards/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Head from "next/head";
import { GetStaticProps } from "next";
import coursesData from "@/data/music_courses.json";

export default function Home({ coursesData }: { coursesData: CoursesData }) {
  return (
    <>
      <Head>
        <title>Music School</title>
        <meta name="description" content="Music school made by Mann!" />
      </Head>

      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
        <HeroSection />
        <FeaturedCourses data={coursesData} />
        <WhyChooseUs />
        <TestimonialCards />
        <UpComingWebinars />
        <Instructors />
      </main>
    </>
  );
}

export type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
};

export type CoursesData = {
  courses: Course[];
};

// export async function getStaticPaths() {
//   const jsonData = fs.readFileSync("./data/music_courses.json", "utf-8");
//   const data = JSON.parse(jsonData);

//   const paths = data.map((item: Course) => ({
//     params: { id: item.id },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: string }) {
//   const jsonData = fs.readFileSync("./data/music_courses.json", 'utf-8');
//   const data = JSON.parse(jsonData);

//   const item = data.find((item) => item.id === params.id);

//   return { props: { item } };
// }

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      coursesData,
    },
  };
};
