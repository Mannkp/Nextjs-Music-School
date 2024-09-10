import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import coursesData from "@/data/music_courses.json";
import Image from "next/image";

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

type CoursePageProps = {
  course: Course | null;
};

// Step 1: Generate dynamic paths for each course using its slug
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = coursesData.courses.map((course) => ({
    params: { slug: course.slug },
  }));

  return {
    paths,
    fallback: false, // Use fallback: false for now, can switch to 'blocking' for non-existing pages.
  };
};

// Step 2: Fetch the data for each individual course based on the slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const course =
    coursesData.courses.find((course) => course.slug === slug) || null;

  if (!course) {
    return {
      notFound: true, // If course not found, return 404 page
    };
  }

  return {
    props: {
      course,
    },
  };
};

export default function CoursePage({ course }: CoursePageProps) {
  const router = useRouter();

  if (!course) {
    return <p>Course not found</p>;
  }

  // Show loading state when the page is being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-page min-h-screen bg-gray-800 text-white h-max">
      <div className="w-full max-w-6xl mx-auto px-4 pt-28 pb-16">
        <h2 className="text-center text-4xl py-8">{course.title}</h2>
        <div className="relative w-2/3 h-[60vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] border-4 rounded-3xl overflow-hidden mx-auto mb-8">
          <Image src={course.image} alt={course.title} fill objectFit="cover" />
        </div>
        <div className="w-4/5 mx-auto md:w-2/3">
          <p className="">{course.description}</p>
          <p>Instructor: {course.instructor}</p>
          <p>Price: ${course.price}</p>
        </div>
      </div>
    </div>
  );
}
