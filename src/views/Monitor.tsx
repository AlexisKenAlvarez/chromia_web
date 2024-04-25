import Container from "@/components/Container";

const Monitor = () => {
  const tech = ["react", "vite", "typescript", "tailwind"];

  return (
    <Container>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center py-20">
        <a href="https://youtu.be/s39uqm3B-OA?si=bw_7QVxj0BILi1v9" rel="noopener noreferrer" target="_blank">
          <img src="/computer.webp" alt="Computer" className="" />
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {tech.map((items) => (
            <img
              src={`/tech/${items}.png`}
              key={items}
              alt={items}
              className="w-32 md:w-auto"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Monitor;
