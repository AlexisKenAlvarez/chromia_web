import Container from "@/components/Container";

const Monitor = () => {
  const tech = ["react", "vite", "typescript", "tailwind"];

  return (
    <Container>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center py-20">
        <img src="/computer.webp" alt="Computer" className="" />
          
        <div className="mt-10 flex items-center justify-center flex-wrap gap-10">
          {tech.map((items) => (
            <img src={`/tech/${items}.png`} key={items} alt={items} className="md:w-auto w-32" />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Monitor;
