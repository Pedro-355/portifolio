"use client";

import { useState } from "react";
import { projects } from "../data/projects";

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);

  const project = projects[current];

  const previous = () => {
    setCurrent((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrent((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative">

      {/* PROJECT CARD */}

      <article className="card mx-auto max-w-3xl rounded-2xl p-8 md:p-10">

        <div className="mb-6 flex items-center justify-between">

          <span className="font-mono text-sm text-blue-400">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <span className="font-mono text-xs text-gray-500">
            PROJECT
          </span>

        </div>

        <h3 className="text-2xl font-bold text-white md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 min-h-20 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* TAGS */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#303944] bg-[#11161d] px-3 py-1.5 font-mono text-xs text-gray-300"
            >
              #{tag.replaceAll(" ", "-")}
            </span>
          ))}

        </div>

        {/* REPOSITORY */}

        <div className="mt-8">

          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#303944] px-5 py-3 font-semibold text-white hover:border-blue-400 hover:text-blue-400"
          >
            View repository
            <span>↗</span>
          </a>

        </div>

      </article>

      {/* CONTROLS */}

      <div className="mt-8 flex items-center justify-center gap-4">

        <button
          onClick={previous}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#303944] text-lg text-gray-400 hover:border-blue-400 hover:text-white"
        >
          ←
        </button>

        {/* INDICATORS */}

        <div className="flex gap-2">

          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-6 bg-blue-400"
                  : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}

        </div>

        <button
          onClick={next}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#303944] text-lg text-gray-400 hover:border-blue-400 hover:text-white"
        >
          →
        </button>

      </div>

    </div>
  );
}
