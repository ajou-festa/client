import Link from "next/link";

const sectionLinks = [
  {
    name: "A구역",
    href: "/dongbak/?day=1&section=A",
    x: 4.5,
    y: 9,
    diameter: 10,
    color: "bg-section-1",
  },
  {
    name: "B구역",
    href: "/dongbak/?day=1&section=B",
    x: 13,
    y: 26,
    diameter: 10,
    color: "bg-section-2",
  },
  {
    name: "C구역",
    href: "/dongbak/?day=1&section=C",
    x: 4,
    y: 21,
    diameter: 10,
    color: "bg-section-3",
  },
  {
    name: "D구역",
    href: "/dongbak/?day=1&section=D",
    x: 16.5,
    y: 10,
    diameter: 10,
    color: "bg-section-4",
  },
];

const SectionNavigator = () => {
  return (
    <>
      {sectionLinks.map((section, index) => (
        <Link href={section.href} key={index}>
          <div
            key={index}
            className={`z-20 absolute rounded-full flex justify-center items-center ${section.color} animate-pulse`}
            style={{
              top: `${section.y}rem`,
              left: `${section.x}rem`,
              width: `${section.diameter}rem`,
              height: `${section.diameter}rem`,
            }}
          ></div>
        </Link>
      ))}
    </>
  );
};

export default SectionNavigator;
