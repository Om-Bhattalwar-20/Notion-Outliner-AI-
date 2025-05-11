

import { useState } from "react";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { List, Layout } from "lucide-react";

const MindMapToggle = () => {
  
  
  const [viewMode, setViewMode] = useState<"linear" | "mindmap">("linear");
  
  return (
    <section className="py-20 bg-background">
      
      
      <div className="container mx-auto px-4">

        
        <div className="text-center mb-16">
          
          <h2 className="heading-lg">Two ways to visualize your ideas</h2>
          <p className="paragraph max-w-2xl mx-auto">

            
            Switch between linear notes and mind map view with one click.
            
          </p>
          
          <div className="flex justify-center mt-8">
            <ToggleGroup
              type="single"
              
              value={viewMode}
              
              onValueChange={(value) => value && setViewMode(value as "linear" | "mindmap")}
              className="border rounded-full p-1 bg-background"
            >
              <ToggleGroupItem value="linear" className="rounded-full data-[state=on]:bg-blue-500 data-[state=on]:text-white">
                <List className="h-4 w-4 mr-2" />
                Linear View
              </ToggleGroupItem>
              <ToggleGroupItem value="mindmap" className="rounded-full data-[state=on]:bg-blue-500 data-[state=on]:text-white">
                <Layout className="h-4 w-4 mr-2" />
                Mind Map
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        

        
        <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-lg">
          {viewMode === "linear" ? (
            <div className="p-8 bg-white dark:bg-notion-gray-700/20 transition-all">
              <h3 className="text-2xl font-medium mb-4">Project Research Notes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium mb-2">Market Analysis</h4>
                  <p className="text-notion-gray-600 dark:text-notion-gray-300">
                    Our research indicates a growing trend in remote work tools, with a 67% increase in adoption over the past year.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">User Interviews</h4>
                  <p className="text-notion-gray-600 dark:text-notion-gray-300">
                    Key findings from user interviews show a strong preference for integrated solutions that combine note-taking with project management.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Competitor Review</h4>
                  <p className="text-notion-gray-600 dark:text-notion-gray-300">
                    Analyzed 5 competing products, identified gaps in AI integration and visual organization features.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-notion-gray-700/20 p-8 transition-all">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Central node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 w-40 text-center">
                    <p className="font-medium">Project Research</p>
                  </div>
                  
                  {/* Connected nodes */}
                  <div className="absolute left-0 top-0 -translate-x-full bg-green-100 dark:bg-green-900/30 p-3 rounded-lg border border-green-200 dark:border-green-800 w-36 text-center">
                    <p className="font-medium">Market Analysis</p>
                  </div>
                  
                  <div className="absolute right-0 top-0 translate-x-full bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800 w-36 text-center">
                    <p className="font-medium">User Interviews</p>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 w-36 text-center">
                    <p className="font-medium">Competitor Review</p>
                  </div>
                  
                  {/* Connection lines */}
                  <svg width="500" height="300" className="block">
                    {/* Lines connecting nodes */}
                    <line x1="250" y1="150" x2="100" y2="50" stroke="currentColor" strokeWidth="1" className="text-green-400" />
                    <line x1="250" y1="150" x2="400" y2="50" stroke="currentColor" strokeWidth="1" className="text-purple-400" />
                    <line x1="250" y1="150" x2="250" y2="250" stroke="currentColor" strokeWidth="1" className="text-yellow-400" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Try it yourself
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MindMapToggle;
