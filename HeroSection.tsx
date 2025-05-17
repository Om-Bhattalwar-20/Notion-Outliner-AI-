
e
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-xl animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            Your workspace, <span className="text-blue-500">powered by AI</span>
          </h1>
          <p className="paragraph text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
            Connect your notes, tasks, and ideas in one place. Let AI organize your thoughts and enhance your productivity.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "600ms" }}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="group">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-16 rounded-lg overflow-hidden shadow-xl border border-notion-gray-200 bg-card animate-fade-in opacity-0" style={{ animationDelay: "800ms" }}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="AI Notion Workspace"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
