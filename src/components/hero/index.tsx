import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="bg-hero w-full h-screen bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white -z-[1]">
      <div className="absolute w-full h-full opacity-30 bg-gradient-to-br from-black to-blue-800"></div>
      <div className="z-10">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl sm:text-6xl font-semibold text-white text-opacity-90">
            THERE ARE
          </h1>
          <CountUp
            start={0}
            end={250000}
            duration={3.75}
            delay={0.5}
            separator="."
            className="text-6xl sm:text-9xl font-bold text-white"
          />
          <h1 className="text-3xl sm:text-6xl font-semibold text-white text-opacity-90">
            EVENTS NEAR YOU
          </h1>
        </div>
        <p className="font-normal text-sm sm:text-xl mt-10 text-opacity-50 text-blue-50 text-center">
          Photo by{" "}
          <a
            href="https://unsplash.com/@henmankk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="underline text-primary"
            target="_blank"
            rel="noreferrer noopener"
          >
            Keagan Henman
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
