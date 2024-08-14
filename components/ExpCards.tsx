"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "May 2024 — Present",
    currentPosition: "Founder, President",
    place: "internhs",
    previousPositions: [""],
    description:
      "Founded internhs and solely built and developed propreitary software, guiding the project's technical execution and strategic vision. My role was hands-on, involving the formation, and maintanance of an Incorporation. Simultaneously, I focused on directing the project's technical path to align with my creative vision.",
    skills: [
      "Python",
      "Flutter",
      "Scikit",
      "Firebase",
      "Digital Ocean",
      "Figma",
      "Entrepreneurship",
      "UI/UX Design",
    ],
  },
  {
    timeline: "June 2024 — Present",
    currentPosition: "Financial Analyst Intern",
    place: "State Street Journal",
    previousPositions: [
      "M&A Intern",
    ],
    description:
      "Used Discounted Cashflow and Comparables analysis to model financial standing and valuation of companies. Scraped 10-K and 10-Q financial data using SEC edgar to ensure accuracy.",
    skills: [
      "Financial Modelling",
      "DCF",
      "Comps",
      "Accounting",
      "SEC Edgar",
      "Corporate Finance",
      "Valuation",
    ],
  },
  {
    timeline: "June 2024 — Present",
    currentPosition: "AI/ML Research Intern - Internship",
    place: "Dugree",
    previousPositions: [""],
    description:
      "Building a research paper regarding how Prompt Engineering is to be utilized in Retrieval-Augmented Generation (RAG) frameworks to optimize the retrieval process and enhance an LLM's solving ability in regards to optimization problems.",
    skills: [
      "Machine Learning",
      "Retrieval-Augmented Generation",
      "Large Language Models",
      "Prompt Engineering",
      "Research",
      "Python",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/arnavpalawat_cv.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
