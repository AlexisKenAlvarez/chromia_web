import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Nav from "@/components/Nav";

const Download = () => {
  return (
    <Container>
      <Nav />

      <div className="mx-auto max-w-sm pt-10">
        <h1 className="text-2xl">How to setup Chromia?</h1>

        <div className="space-y-4 py-10">
          <div className="mt-5 space-y-2">
            <h1 className="">
              <b>1.&#41;</b> Click the download button below
            </h1>
            <Button className="w-full" asChild>
              <a href="/dist.zip" download className="">
                Download Chromia
              </a>
            </Button>
          </div>

          <div className="space-y-2">
            <h1 className="">
              <b>2.&#41;</b> Go to the file and unzip it.
            </h1>
            <img src="/steps/step2.png" alt="Step 2" className="" />
          </div>

          <div className="space-y-2">
            <h1 className="">
              <b>4.&#41;</b> Go to{" "}
              <span className="text-blue-500">chrome://extensions/</span> tab
              and turn on <span className="text-blue-500">Developer mode</span> on the top right corner of the screen.
            </h1>
            <img src="/steps/step3.jpg" alt="Step 3" className="" />
          </div>

          <div className="space-y-2">
            <h1 className="">
              <b>4.&#41;</b> 
              You will see a new button called <span className="text-blue-500">Load unpacked</span> on the top left corner of the screen. Click it.
            </h1>
            <img src="/steps/step4.jpg" alt="Step 4" className="" />
          </div>

          <div className="space-y-2">
            <h1 className="">
              <b>5.&#41;</b> Select the unzipped folder and it should appear in the chrome extensions tab and it is now ready to use.
            </h1>
            <img src="/steps/step5.jpg" alt="Step 5" className="" />
          </div>


        </div>
      </div>
    </Container>
  );
};

export default Download;
