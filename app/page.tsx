const stack = {
  Cloud: ["AWS", "GCP", "Azure"],

  "Infrastructure as Code": [
    "Terraform",
    "Ansible",
    "Pulumi",
  ],

  "Containers & Orchestration": [
    "Docker",
    "Kubernetes",
    "Helm",
  ],

  "CI/CD": [
    "GitHub Actions",
    "GitLab CI",
  ],

  Observability: [
    "Prometheus",
    "Grafana",
    "Loki",
    "OpenTelemetry",
  ],

  Systems: [
    "Linux",
    "Bash",
    "Python",
  ],
};

const projects = [
  {
    title: "Infrastructure Automation",

    description:
      "Cloud infrastructure designed around repeatability, automation and infrastructure as code.",

    tags: [
      "Terraform",
      "Cloud",
      "Automation",
    ],
  },

  {
    title: "CI/CD Pipelines",

    description:
      "Automated delivery workflows focused on reliable builds, deployments and operational feedback.",

    tags: [
      "GitLab CI",
      "GitHub Actions",
      "DevOps",
    ],
  },

  {
    title: "Observability Stack",

    description:
      "Metrics, logs and dashboards to make distributed systems easier to operate and troubleshoot.",

    tags: [
      "Grafana",
      "Prometheus",
      "Loki",
    ],
  },
];

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-sm text-green-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* NAVBAR */}

      <nav className="fixed top-0 z-50 w-full border-b border-[#202833] bg-[#07090d]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a
            href="#"
            className="font-mono font-bold text-white"
          >
            pedro
            <span className="text-blue-400">@</span>
            devops
          </a>

          <div className="hidden gap-6 text-sm text-gray-400 sm:flex">

            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#stack" className="hover:text-white">
              Stack
            </a>

            <a href="#projects" className="hover:text-white">
              Projects
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>

          </div>

        </div>
      </nav>

      {/* HERO */}

      <section className="grid-bg flex min-h-screen items-center px-6 pt-20">

        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 py-20 lg:grid-cols-[1.25fr_.75fr]">

          <div>

            <p className="terminal-line mb-6 font-mono text-sm text-gray-400">
              whoami
            </p>

            <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-blue-400">
              DevOps Engineer
            </p>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Pedro Vieira
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
              I build and automate cloud infrastructure,
              CI/CD pipelines and containerized environments
              with a focus on reliability, scalability and
              observability.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200"
              >
                View projects
              </a>

              <a
                href="https://github.com/Pedro-355"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[#303944] px-5 py-3 font-semibold text-white hover:border-blue-400 hover:text-blue-400"
              >
                GitHub ↗
              </a>

            </div>

          </div>

          {/* TERMINAL */}

          <div className="glow card rounded-2xl p-5 font-mono text-sm">

            <div className="mb-5 flex gap-2 border-b border-[#202833] pb-4">

              <span className="h-3 w-3 rounded-full bg-red-400/80" />

              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />

              <span className="h-3 w-3 rounded-full bg-green-400/80" />

            </div>

            <div className="space-y-3 text-gray-400">

              <p>
                <span className="text-green-400">$</span>{" "}
                kubectl get infrastructure
              </p>

              <p className="pl-4 text-green-400">
                ✓ infrastructure: ready
              </p>

              <p>
                <span className="text-green-400">$</span>{" "}
                terraform plan
              </p>

              <p className="pl-4 text-blue-400">
                Plan: infrastructure as code
              </p>

              <p>
                <span className="text-green-400">$</span>{" "}
                ./deploy.sh
              </p>

              <p className="pl-4 text-green-400">
                ✓ deployment completed
              </p>

              <p>
                <span className="text-green-400">$</span>{" "}
                systemctl status observability
              </p>

              <p className="pl-4 text-green-400">
                ● monitoring.service — active
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <SectionTitle
          eyebrow="01 / about"
          title="Building systems that scale."
        />

        <div className="grid gap-6 md:grid-cols-3">

          {[
            [
              "☁️",
              "Cloud Infrastructure",
              "Designing and automating infrastructure across cloud environments.",
            ],

            [
              "⚙️",
              "Automation",
              "Turning repetitive operational work into reliable, reproducible workflows.",
            ],

            [
              "📊",
              "Observability",
              "Using metrics, logs and traces to understand systems in production.",
            ],
          ].map(([icon, title, text]) => (

            <article
              key={title}
              className="card rounded-2xl p-7"
            >

              <div className="mb-5 text-3xl">
                {icon}
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {title}
              </h3>

              <p className="leading-7 text-gray-400">
                {text}
              </p>

            </article>

          ))}

        </div>

      </section>

      {/* STACK */}

      <section
        id="stack"
        className="border-y border-[#202833] bg-[#090c11] px-6 py-24"
      >

        <div className="mx-auto max-w-6xl">

          <SectionTitle
            eyebrow="02 / stack"
            title="Tools I work with."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {Object.entries(stack).map(
              ([category, technologies]) => (

                <article
                  key={category}
                  className="card rounded-2xl p-6"
                >

                  <h3 className="mb-4 font-semibold text-white">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">

                    {technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-md border border-[#303944] bg-[#11161d] px-3 py-1.5 font-mono text-xs text-gray-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <SectionTitle
          eyebrow="03 / projects"
          title="Things I've built."
        />

        <div className="grid gap-6 md:grid-cols-3">

          {projects.map((project, index) => (

            <article
              key={project.title}
              className="card rounded-2xl p-7"
            >

              <div className="mb-6 font-mono text-sm text-blue-400">
                0{index + 1}
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {project.title}
              </h3>

              <p className="mb-6 min-h-24 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="text-xs text-green-400"
                  >
                    #{tag.replaceAll(" ", "-")}
                  </span>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-4xl rounded-3xl border border-[#202833] bg-[#0d1117] p-8 text-center md:p-14">

          <p className="mb-3 font-mono text-sm text-green-400">
            04 / contact
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Let's build something reliable.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Find me on GitHub or LinkedIn and let's talk
            about cloud, automation, infrastructure and
            technology.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <a
              href="https://www.linkedin.com/in/pedro-vieira-2b1726303"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Pedro-355"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#303944] px-5 py-3 font-semibold hover:border-white"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-[#202833] px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 font-mono text-xs text-gray-500 sm:flex-row">

          <span>
            © {new Date().getFullYear()} Pedro Vieira
          </span>

          <span>
            Automate. Build. Improve. 🚀
          </span>

        </div>

      </footer>

    </main>
  );
}