"use client";

import { certifications } from "../data/certifications";

export default function CertificationCarousel() {
  const items = [...certifications, ...certifications];

  return (
    <div className="relative overflow-hidden">

      {/* Gradiente nas laterais */}

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#07090d] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#07090d] to-transparent" />

      {/* CAROUSEL */}

      <div className="certification-carousel flex w-max gap-5">

        {items.map((certification, index) => {

          const content = (
            <div className="w-[280px] shrink-0 rounded-xl border border-[#202833] bg-[#0d1117] p-6 transition-colors hover:border-blue-400">

              <div className="mb-5 flex items-center justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#303944] bg-[#11161d] font-mono text-sm text-blue-400">
                  ✓
                </div>

                {certification.year && (
                  <span className="font-mono text-xs text-gray-500">
                    {certification.year}
                  </span>
                )}

              </div>

              <h3 className="font-semibold leading-6 text-white">
                {certification.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {certification.issuer}
              </p>

              {certification.url && (
                <p className="mt-5 font-mono text-xs text-blue-400">
                  View credential ↗
                </p>
              )}

            </div>
          );

          if (certification.url) {
            return (
              <a
                key={`${certification.name}-${index}`}
                href={certification.url}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={`${certification.name}-${index}`}>
              {content}
            </div>
          );
        })}

      </div>

    </div>
  );
}