"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I embarked on my coding journey at 12, diving into app development with flutter, and
          a burning passion for bringing concepts from ideation to creation. This passion led me to design
          and develop various apps, be it for massive political parties, or the U.S. Congress. From 15-16 I delved into,
          Python scripts, learning Ai and ML, and web scraping,
          focusing on community centered projects.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          In parallel, my path took an exciting turn into the non-profit space,
          founding{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://internhs.com"
            target="blank"
            rel="noopener noreferrer"
          >
            internhs
          </a>{" "}
          this year, providing high-school students with opportunities
          to develop in the workplace in a professional setting
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Outside of coding, I&#39;m an avid entrepreneur who has started 
          multiple business' with interest in finance, furthermore, I enjoy my time 
          going outside, working out, and playing volleyball. Looking forward, 
          I aim to leverage my development experience and entrepreneuership and 
          financial experience to build startups and investment algorithms.
        </p>
      </div>
    </section>
  );
}
