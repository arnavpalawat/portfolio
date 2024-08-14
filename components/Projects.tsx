"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
    {  
    title: "internhs",
    imagePath: "internhs.png",
    description:
      "I developed a website to help ambitious high school students secure internships by leveraging a content-based AI recommendation model. I built a Flask server to host Python scripts as REST APIs, which are then called from the frontend. To facilitate Cross-Origin Resource Sharing (CORS) among domains, I utilized Flask-CORS. For job scraping, I implemented a Python script capable of parsing JavaScript. I developed a recommendation model using scikit-learn and cosine similarity to perform similarity searches. The frontend was created using Flutter and designed with UI/UX principles in Figma. Managing over 100,000 read and write operations, I relied on Firebase for data storage and authentication. For deployment, I used Firebase Deploy to handle DNS and build verification certificates. Additionally, I incorporated the Groq AI API to manage and assess the quality of internships.",    skills: [
      "Linear Algebra",
      "Cosine Similarity",
      "Python",
      "JS Scraping",
      "Ubuntu Server-side",
      "CORS",
      "Flutter",
      "Firebase",
      "Figma",
    ],
    link: "https://internhs.com",
  },
  {  
    title: "Mealify",
    imagePath: "mealify.png",
    description:
      "Developed a 3rd place winning application for the congressional app challenge, used to connect food insecure people with business' producing food waste in a comprehensive way, used firebase and flutter to build this application.",
    skills: [
      "Flutter",
      "Firebase",
      "Figma",
    ],
    link: "https://github.com/arnavpalawat/Mealify",
  },
  {

    title: "Telehealth",
    imagePath: "pink.jpeg",
    description:
      "Trained 3 Machine Learning Models to predict disease presence based around a decision tree classifier in scikit by utilizing a python script. Utilized a Machine Learning model to recognize diabetes, lung cancer, and heart disease in Python, developed a Python script to run and predict the disease outcomes on your localhost using flask via http requests to the localhost Rest API. Built an aesthetic frontend in Flutter to send http requests to localhost and to accept input data.",
    skills: [
      "Machine Learning",
      "Decision Tree Classifiers",
      "Python",
      "Flutter",
      "Flask",
    ],
    link: "https://github.com/arnavpalawat/MediHacksTeleHealth",
  },
  {
    title: "Political App Wiki",
    imagePath: "mealify.jpeg",
    description:
      "Built and deployed an app on the Apple App Store and Google Play Store with 1000s of downloads. Developed for and endorsed by an India based organization boasting over 10,000,000 members, used flutter and firebase to store, retrieve and display data. Utilized a database infrastructure to manage and access extensive datasets, implementing UI components for effective data presentation.",
    skills: ["Typescript", "JavaScript", "Tailwind CSS", "Vercel"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
