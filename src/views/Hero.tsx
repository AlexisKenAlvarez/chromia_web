import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <Container>
      <div className="mt-10 max-w-screen-xl text-center mx-auto scroll-margin" id="home">
        <h1 className="mx-auto max-w-md text-5xl sm:text-7xl">
          Voice Control Chrome Plugin
        </h1>
        <p className="mx-auto max-w-prose sm:text-base text-sm mt-3">
          A Human-Computer Interaction Design Approach through Speech Command
          for Google Chrome Website Interaction Extension Plugin
        </p>

        <div className="mt-6 flex flex-row items-center justify-center gap-3">
          <Button className="rounded-3xl">Add to Chrome</Button>
          <Button className="rounded-3xl space-x-2" variant="outline">
            <FaGithub />
            <p className="">View Repository</p>
          </Button>
        </div>

        <div className="flex mx-auto w-fit mt-10 -space-x-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div className="w-11 rounded-full border-white border-2" key={i}>
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
