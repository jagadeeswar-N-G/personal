import Container from "@/components/Container";
import Discover from "@/components/Discover";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <Container className="flex h-full items-center justify-center">
      <FadeIn>
        <p className="text-black text-2xl pl-2">Hello, I am</p>
        <p className="text-black font-medium md:text-6xl text-4xl flex items-center">
          JAGADEES<p className="text-red-600">WAR</p>
          <p className="text-gray-500 md:text-xl text-base ml-2 opacity-25 hover:opacity-90">
            戦 <p>争</p>
          </p>
        </p>
        <div className="md:w-[450px] mt-4">
          <p className="text-black text-justify  indent-8">Crafting digital experiences with passion and precision. As a frontend developer, I bring ideas to life through clean code and captivating design. Let's build something extraordinary together.</p>
        </div>
      </FadeIn>
    </Container>
  );
}
