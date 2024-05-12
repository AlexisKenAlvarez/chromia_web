import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <Container>
      <div
        className="scroll-margin mx-auto mt-10 max-w-screen-xl text-center"
        id="home"
      >
        <h1 className="mx-auto max-w-md text-5xl sm:text-7xl">
          Voice Control Chrome Plugin
        </h1>
        <p className="mx-auto mt-3 max-w-prose text-sm sm:text-base">
          A Human-Computer Interaction Design Approach through Speech Command
          for Google Chrome Website Interaction Extension Plugin
        </p>

        <div className="mt-6 flex flex-row items-center justify-center gap-3">
          <div className="">
            <Button className="relative flex gap-2 rounded-3xl" asChild>
              <a href="/download" rel="noopener noreferrer" className="">
                <p className="">Download</p>
                <p className="text-xs opacity-50">&#40;BETA&#41;</p>
              </a>
            </Button>
          </div>

          <Button className="space-x-2 rounded-3xl" variant="outline" asChild>
            <a
              href="https://github.com/AlexisKenAlvarez/chromia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
              <p className="">View Repository</p>
            </a>
          </Button>
        </div>

        <div className="mx-auto mt-10 flex w-fit -space-x-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div className="w-11 rounded-full border-2 border-white" key={i}>
              <img
                src={`/avatars/${i + 1}.webp`}
                alt={`Image${i + 1}`}
                className=""
              />
            </div>
          ))}
        </div>
        <p className="mt-3">Become one of Chromia users</p>
      </div>
    </Container>
  );
};

export default Hero;
