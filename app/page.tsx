import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import { projects, testimonials } from "@/data/index";

export default function Home() {
  return (
    <main className="relative flex items-center bg-black-100 justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome />}]}
        />
        <Hero />
        <Grid />
        {projects.map(project => (
          <div key={project.id}>
            {/* Render project details */}
          </div>
        ))}
        {testimonials.map(testimonial => (
          <div key={testimonial.name}>
            {/* Render testimonial details */}
          </div>
        ))}
      </div>
    </main>
  );
}
