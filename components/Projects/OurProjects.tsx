"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  type:
    | "Commercial"
    | "Hospital"
    | "Hotels"
    | "Residential"
    | "Institutions"
    | "Retail"
    | "Resturants";
  imageUrl: string;
}
const projectsData: Project[] = [
  {
    title: "Dolce & Gabbana Boutique",
    type: "Retail",
    imageUrl: "/image6.png",
  },
  {
    title: "Tiffany Flagship",
    type: "Retail",
    imageUrl: "/image5.png",
  },
  {
    title: "Dream Hotel",
    type: "Hotels",
    imageUrl: "/image4.png",
  },
  {
    title: "Chick-Fil-A",
    type: "Resturants",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Terrace Pergola",
    type: "Residential",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Le Soleil",
    type: "Hotels",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Project 1",
    type: "Resturants",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Project 1",
    type: "Commercial",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Project 1",
    type: "Hospital",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Project 1",
    type: "Hotels",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Project 1",
    type: "Residential",
    imageUrl: "/project1.jpg",
  },
];

// function to filter projects by type
function filterProjectsByType(type: Project["type"]): Project[] {
  return projectsData.filter((project) => project.type === type);
}

export default function OurProject() {
  const [selectedType, setSelectedType] = useState<Project["type"] | null>(
    null,
  );
  const displayedProjects =
    selectedType === null ? projectsData : filterProjectsByType(selectedType);

  return (
    <div className="w-full min-h-screen pt-7 px-5">
      <div className="text-[220px] leading-tight font-[PPFONT] my-10  sm:text-[80px] md:text-[120px] lg:text-[170px] text-blue-900 tracking-tight pl-3 md:pl-5 border-b border-blue-900">
        Our Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_6fr] gap-4 mb-20">
        <div className="flex flex-col gap-4">
          <nav className="flex flex-col text-xl leading-tight font-[PPFONT] text-blue-900">
            <button
              onClick={() => setSelectedType(null)}
              className={`text-left px-4 py-2 transition ${
                selectedType === null
                  ? "opacity-30"
                  : "hover:cursor-pointer hover:opacity-50"
              }`}
            >
              All
            </button>
            {[
              "Commercial",
              "Hospital",
              "Hotels",
              "Residential",
              "Institutions",
              "Retail",
              "Resturants",
            ].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as Project["type"])}
                className={`text-left px-4 py-2 rounded-md transition ${
                  selectedType === type
                    ? "opacity-50"
                    : "hover:cursor-pointer hover:opacity-50"
                }`}
              >
                {type}
              </button>
            ))}
          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg p-4 font-[PPFONT] text-blue-900"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <h2 className="text-3xl mb-2">{project.title}</h2>
              <p className="uppercase">{project.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
