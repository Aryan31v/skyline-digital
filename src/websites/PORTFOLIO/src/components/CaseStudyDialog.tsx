import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Project } from "@/types";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface CaseStudyDialogProps {
  project: Project;
  children: React.ReactNode;
}

export function CaseStudyDialog({ project, children }: CaseStudyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden bg-background border-border">
        <ScrollArea className="h-full">
          <div className="p-8 md:p-12">
            <DialogHeader className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">{project.category}</div>
                  <DialogTitle className="text-4xl md:text-6xl font-black font-display tracking-tight leading-none">
                    {project.title}
                  </DialogTitle>
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <Button variant="outline" size="sm" className="rounded-lg border-border hover:bg-white/5">
                      Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" size="sm" className="rounded-lg border-border hover:bg-white/5">
                      GitHub <Github className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </DialogHeader>

            <div className="aspect-video rounded-2xl overflow-hidden mb-16 bg-muted border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h3 className="text-xl font-bold font-display mb-4 uppercase tracking-widest text-muted-foreground">The Challenge</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-bold font-display mb-4 uppercase tracking-widest text-muted-foreground">The Solution</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-bold font-display mb-4 uppercase tracking-widest text-muted-foreground">The Result</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.result}
                  </p>
                </section>
              </div>

              <div className="space-y-12">
                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6">Impact</h4>
                  <div className="space-y-8">
                    {project.metrics?.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-4xl font-black font-display tracking-tight leading-none">{metric.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-6">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-md bg-white/5 border-white/10 text-[10px] uppercase tracking-widest">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="border-t border-border pt-12 text-center">
              <h3 className="text-2xl font-bold font-display mb-6">Ready to build something similar?</h3>
              <Button size="lg" className="rounded-lg px-10 h-14 bg-accent hover:bg-accent/90 text-white font-bold">
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
