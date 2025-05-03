import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";


const CtaSection = () => {
  return (
    <section className="py-20">
      
      
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg">Ready to transform your workflow?</h2>
          <p className="paragraph max-w-2xl mx-auto text-xl">
            Join thousands of users who have already improved their productivity with our AI-powered workspace.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get started for free
            </Button>
            <Button variant="outline" size="lg" className="group">
              Schedule a demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm text-notion-gray-500 mt-6">
            No credit card required. Free plan includes all essential features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
