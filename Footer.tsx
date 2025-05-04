
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-notion-gray-100 dark:bg-notion-gray-700/20 py-12 mt-20">
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              
              <img 
                src="/lovable-uploads/a07b51fe-da4b-4848-9adc-d83399464621.png" 
                alt="Notion Logo" 
                className="h-8"/>
            </div>
            <p className="text-notion-gray-500 dark:text-notion-gray-300 mb-4">
              Your AI-powered workspace for notes, tasks, and knowledge management.
            </p>
            <div className="flex items-center">
              <span className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Built with AI
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-notion-gray-700 dark:text-notion-gray-200 mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Templates", "Integrations", "Pricing", "Updates"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-notion-gray-500 hover:text-notion-gray-700 dark:text-notion-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-notion-gray-700 dark:text-notion-gray-200 mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "Tutorials", "Blog", "Community", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-notion-gray-500 hover:text-notion-gray-700 dark:text-notion-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-notion-gray-700 dark:text-notion-gray-200 mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Privacy", "Terms", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-notion-gray-500 hover:text-notion-gray-700 dark:text-notion-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-notion-gray-200 dark:border-notion-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-notion-gray-500 dark:text-notion-gray-400 text-sm">
            &copy; {currentYear} Notion. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-notion-gray-500 hover:text-notion-gray-700 dark:text-notion-gray-400 dark:hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-notion-gray-500 hover:text-notion-gray-700 dark:text-notion-gray-400 dark:hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="text-notion-gray-500 hover:text-notion-gray-700 dark:text-notion-gray-400 dark:hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
