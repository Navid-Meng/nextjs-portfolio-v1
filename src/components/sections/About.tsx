import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Terminal } from "lucide-react";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js", "TailwindCSS",
  "PostgreSQL", "GraphQL", "Docker", "AWS", "Git"
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a full-stack developer with a passion for creating elegant solutions
            to complex problems. With over 5 years of experience, I specialize in
            building scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card hover:bg-card/60 transition-colors">
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <Layout className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">
                Creating responsive and intuitive user interfaces with modern frameworks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card/60 transition-colors">
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <Terminal className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                Building robust APIs and server-side applications with scalability in mind.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:bg-card/60 transition-colors">
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <Code2 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, well-documented code following best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}