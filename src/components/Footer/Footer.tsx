import Link from "next/link";

const Footer = () => {
  const footerData = {
    footer: [
      {
        title: "About",
        desc: "We are a leading platform offering comprehensive courses to help you achieve your career goals.",
        links: [],
      },
      {
        title: "Quick Links",
        desc: "",
        links: [
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
          { name: "Courses", url: "/courses" },
          { name: "Contact", url: "/contact" },
        ],
      },
      {
        title: "Follow Us",
        desc: "",
        links: [
          { name: "Facebook", url: "https://facebook.com" },
          { name: "Twitter", url: "https://twitter.com" },
          { name: "Instagram", url: "https://instagram.com" },
        ],
      },
      {
        title: "Contact Us",
        desc: "123 Learning Lane, Knowledge City, EduCountry Phone: +1 (123) 456-7890 Email: contact@learningplatform.com",
        links: [],
      },
    ],
  };

  type Link = {
    name: string;
    url: string;
  };

  type FooterSection = {
    title: string;
    desc: string;
    links: Link[];
  };

  const date = new Date();
  const currentYear: number = date.getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-8 px-4">
        {footerData &&
          footerData?.footer?.map((item: FooterSection, index: number) => {
            return (
              <div key={index} className="flex-grow flex-shrink basis-0">
                {item?.title && item?.title !== "" && (
                  <h3 className="text-white text-lg font-semibold mb-4">
                    {item?.title}
                  </h3>
                )}
                {item?.desc && item?.desc !== "" && (
                  <p className="mb-4">{item?.desc}</p>
                )}
                {item?.links && item?.links.length !== 0 && (
                  <ul>
                    {item?.links?.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link?.url}
                          className="hover:text-white transition-colors duration-300"
                        >
                          {link?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
      </div>
      <p className="text-center text-xs pt-8">
        &copy;{currentYear} Music School.
      </p>
    </footer>
  );
};

export default Footer;
