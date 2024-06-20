"use client"
import Link from "next/link"
import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "section1", label: "FORMAT" },
  { id: "section2", label: "Schedule" },
  { id: "section3", label: "Rules & faqs" }
];



const EsportsNavbar: React.FC = () =>{

  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const handleScroll = () => {
    const offsets = sections.map(section => document.getElementById(section.id)?.offsetTop || 0);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i]) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  };

  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




    return(
        <div className="w-full">
  <div className="bg-[#131313] max-xl:hidden fixed -left-40 top-[46%] flex gap-16 px-7 py-5  rounded-lg z-50 rotate-90">
  {sections.map(section => (
          <div key={section.id} className="text-white uppercase text-sm helvetica-light-font">
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(section.id);
              }}
              className={activeSection === section.id ? 'active' : ''}
            >
              {section.label}
            </a>
          </div>
        ))}
  </div>
  </div>
    )
}

export default EsportsNavbar;