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
    title: "BOPM Options Pricing Model (Using ARIMA Time Series Forcasting)",
    imagePath: "BOPM.png",
    description:
      "I built an ARIMA (Auto Regression Integrated Moving Average) time series forecaster to handle a differenced stock dataset. The ARIMA model was trained on three years of historical ticker data, which was downloaded from Yahoo Finance and differenced using logarithmic differencing. The model was then used to generate two states (± 1% from regression) for a one-year forecast, indicating potential outcomes for option exporting over the year. Additionally, I employed the BOPM (Binomial Option Pricing Model) method to price call options for a specific ticker and strike price, utilizing the two states derived from the ARIMA model.",
    skills: [
      "Financial Markets",
      "Python",
      "Time-Series Forcasting",
      "Binomial Modelling",
      "ARIMA",
    ],
    link: "https://github.com/arnavpalawat/BOPM_Options_ARIMA",
  },
  {  
    title: "Swing Trading Algorithm Using ARIMA (Auto Regressive Integrated Moving Averages)",
    imagePath: "Swing.png",
    description:
      "I developed an ARIMA (Auto Regressive Integrated Moving Averages) model to forecast future stock price movements, predicting up to 14 days ahead based on 60 days of historical data. The model has demonstrated over 82% accuracy in preliminary testing, using a training-to-test split ratio of 0.8 to 0.2. It takes a stock ticker as input and generates an auto-fitted ARIMA model by predicting the optimal p, d, and q order values.",
    skills: [
      "Time-Series Forcasting",
      "Python",
      "ARIMA",
    ],
    link: "https://github.com/arnavpalawat/Swing_Trading_Algorithm",
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
    imagePath: "Telehealth.png",
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
    title: "Political Wiki App",
    imagePath: "PWA.png",
    description:
      "Built and deployed an app on the Apple App Store and Google Play Store with 1000s of downloads. Developed for and endorsed by an India based organization boasting over 10,000,000 members, used flutter and firebase to store, retrieve and display data. Utilized a database infrastructure to manage and access extensive datasets, implementing UI components for effective data presentation.",
    skills: ["Flutter", "HTTP", "Firebase", "Xcode"],
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
                  {project.title}{""}
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
