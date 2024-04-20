import Container from "@/components/Container";

const Features = () => {
  const features = [
    {
      title: "Web Navigation",
      desc: "Navigate through the web such as searching and visiting websites.",
    },
    {
      title: "Media Control",
      desc: "Watch your favorite movies and control it using voice commands.",
    },
    {
      title: "Personalize commands",
      desc: "Set custom commands based on your preference.",
    },
  ];

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-screen-xl scroll-margin" id="features">
        <div className="relative mx-auto h-fit w-fit space-y-1.5">
          <div className="mx-auto h-1 w-8 rounded-2xl bg-primary"></div>
          <h1 className="text-3xl">Chromia Features</h1>
        </div>

        <div className="mt-10 flex items-center justify-center gap-14 flex-wrap">
          {features.map((items, i) => (
            <div className="w-80" key={items.title}>
              <div className=" overflow-hidden rounded-md bg-gray-200 p-5">
                <img
                  src={`/features/${i + 1}.webp`}
                  alt={`ImageFeatures${i}`}
                  className="-mb-6"
                />
              </div>
              <h1 className="mt-5 text-xl">{items.title}</h1>
              <p className="opacity-70">{items.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
