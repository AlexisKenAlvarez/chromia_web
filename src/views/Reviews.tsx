import Container from "@/components/Container";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Mary Joy Endozo",
      image: "joy",
      role: "Agricultural Entrepreneur",
      subject: "Useful",
      message: "Because I can use it very well.",
    },
    {
      name: "John Doe",
      image: "spongebob",
      role: "Software Engineer",
      subject: "Great",
      message: "I can now control my computer with my voice.",
    },
    {
      name: "Jose Rizal",
      image: "jose",
      role: "Graphic Designer",
      subject: "Awesome",
      message:
        "Napakahusay ng inyong naimbento, salamat sa inyo. Mabuhay ang Pilipinas",
    },
  ];

  return (
    <Container className="py-20 ">
      <div className="mx-auto max-w-screen-xl scroll-margin" id="reviews">
        <div className="relative mx-auto h-fit w-fit space-y-1.5">
          <div className="mx-auto h-1 w-8 rounded-2xl bg-primary"></div>
          <h1 className="text-3xl">What they say</h1>
        </div>

        <div className="items-stat mt-10 flex flex-wrap justify-center gap-14">
          {reviews.map((items) => (
            <div
              className="flex h-auto w-80 flex-col rounded-lg border-b-4 border-slate-400/50 bg-white p-6"
              key={items.name}
            >
              <div className="flex items-center gap-3">
                <img
                  src={`/reviews/${items.image}.webp`}
                  alt={items.name}
                  className="h-14 w-14 rounded-full bg-blue-100"
                />
                <div className="">
                  <h1 className="font-primary text-lg">{items.name}</h1>
                  <p className="text-xs">{items.role}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col justify-between ">
                <div className="">
                  <h1 className="text-xl">{items.subject}</h1>
                  <p className="text-sm opacity-80">{items.message}</p>
                </div>

                <div className="flex mt-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="text-yellow-400" fill="#facc15" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
