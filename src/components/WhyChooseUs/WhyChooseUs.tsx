import Image from "next/image";

export const musicSchoolContent: MusicContent[] = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
  },
];

type MusicContent = {
  title: string;
  description: string;
};

const WhyChooseUs = () => {
  return (
    <div className="Sticky-Scroll container mx-auto px-4 pt-24">
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
        Learn with the Best
      </h2>
      <div className="relative flex flex-col md:flex-row justify-center items-stretch">
        <div className="content">
          <div className="max-w-2xl">
            {musicSchoolContent?.map((item: MusicContent, index: number) => (
              <div key={index * 7} className="my-20">
                <h2 className="text-2xl font-bold text-slate-100">
                  {item?.title}
                </h2>
                <p className="text-kg text-slate-300 max-w-sm mt-10">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="image hidden lg:block h-60 w-80 rounded-3xl bg-white sticky overflow-hidden my-16 top-52">
          <Image
            src={"/courses/music-prod.jpg"}
            alt="Music School"
            fill
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
