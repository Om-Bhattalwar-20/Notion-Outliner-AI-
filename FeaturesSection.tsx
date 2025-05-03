import { Check, Layout, PenTool, ToggleRight, ArrowRight } from "lucide-react";
const features = [
  {
    icon: <Layout className="h-8 w-8 text-blue-500" />,
    title: "AI-Powered Templates",
    description:
      "Browse and generate custom templates with our AI engine. From meeting notes to project plans, create the perfect template in seconds.",
  },
  {
    icon: <ToggleRight className="h-8 w-8 text-blue-500" />,
    title: "Mind Map & Linear Switcher",
    description:
      "Toggle between visual mind maps and structured linear notes with one click. Organize your thoughts however you work best.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-blue-500" />,
    title: "Real-Time Writing Coach",
    description:
      "Get instant grammar, tone, and structure suggestions as you type. Our AI coach helps you write better and faster.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-notion-gray-100 dark:bg-notion-gray-700/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg">Features that enhance your productivity</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Our AI-powered tools help you work smarter, not harder. Experience a new way to organize and create content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 bg-white dark:bg-notion-gray-700/30 hover-lift"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-notion-gray-700 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-notion-gray-500 dark:text-notion-gray-300">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center text-blue-500 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="heading-md mb-8">Everything you need in one place</h3>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Unlimited workspaces",
              "Version history",
              "Collaborative editing",
              "AI suggestions",
              "Cross-platform access",
              "Smart templates",
              "Mind maps",
              "Writing assistant",
              "Export options"
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center p-3 bg-white dark:bg-notion-gray-700/30 rounded-md"
              >
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-notion-gray-600 dark:text-notion-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
