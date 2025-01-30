import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-school-light to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-school-primary mb-6 animate-fade-up">
          Transform Your Learning Journey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Discover a modern approach to education that empowers students to achieve their full potential.
        </p>
        <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button className="bg-school-primary hover:bg-school-primary/90 text-lg px-8 py-6">
            Start Learning
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;