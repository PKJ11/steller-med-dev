import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import treeProject from "@/assets/tree-project.jpg";
import cleanlinessProject from "@/assets/cleanliness-project.jpg";
import wildlifeProject from "@/assets/wildlife-project.jpg";

const Projects = () => {
  const projects = [
    {
      image: treeProject,
      title: "Mission 40K: Tree plantation",
      year: "2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."
    },
    {
      image: cleanlinessProject,
      title: "Weekly cleanliness program in city",
      year: "2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise varius enim in eros elementum."
    },
    {
      image: wildlifeProject,
      title: "Wildlife safety program",
      year: "2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendise varius enim in eros elementum."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Supporters Section */}
        <div className="mb-20">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-8 text-center">
            OUR SUPPORTERS
          </h2>
          <div className="flex justify-center items-center space-x-12 opacity-60 ">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-gray-400 font-semibold">
                logoipsum™
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="w-16 h-0.5 bg-primary mb-4"></div>
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            PROJECTS WE HAVE DONE
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-16 max-w-2xl">
            We are Creating sustainable society, for everyone and forever.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-medium">
                <div className="relative h-64">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                    <p className="text-sm opacity-90">{project.year}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                    See more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;