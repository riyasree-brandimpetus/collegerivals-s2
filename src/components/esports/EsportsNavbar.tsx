"use client";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "format", label: "FORMAT" },
  { id: "winner", label: "Winner" },
  { id: "rules", label: "Rules & faqs" },
];

const EsportsNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const handleScroll = () => {
    const formatOffset = document.getElementById("format")?.offsetTop || 0;
    const winnerOffset = document.getElementById("winner")?.offsetTop || 0;
    const rulesOffset = document.getElementById("rules")?.offsetTop || 0;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= rulesOffset) {
      setActiveSection("rules");
    } else if (scrollPosition >= winnerOffset) {
      setActiveSection("winner");
    } else if (scrollPosition >= formatOffset) {
      setActiveSection("format");
    }
  };

  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-[#131313] max-xl:hidden fixed -left-40 top-[46%] flex gap-16 px-7 py-5  rounded-lg z-50 rotate-90">
        {sections.map((section) => (
          <div
            key={section.id}
            className="text-white uppercase text-sm helvetica-light-font"
          >
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(section.id);
              }}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EsportsNavbar;
