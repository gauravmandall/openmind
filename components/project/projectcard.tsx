"use client";

import { Link2Icon } from "@radix-ui/react-icons";
import GitHubButton from "react-github-btn";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProject } from "@/data/projects";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <Card className="group relative border-zinc-900 bg-zinc-950 text-zinc-400 brightness-90 transition-all duration-150 ease-in-out hover:brightness-110 focus-visible:ring-zinc-950">
      <a
        href={project.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -right-3 -top-2 hidden group-hover:block"
      >
        <Link2Icon className="h-6 w-6 cursor-pointer font-bold transition-all duration-150 ease-linear group-hover:text-zinc-500" />
      </a>

      <CardHeader className="flex flex-col items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="mb-2">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            {/* <PersonIcon className="mr-1 h-3 w-3" />
            Dave Burk */}
            <GitHubButton
              data-color-scheme="dark"
              href={project.projectRepo}
              data-show-count="true"
              data-text="Stars"
            >
              Stars
            </GitHubButton>
          </div>
          <div className="flex items-center">
            {/* <StarIcon className="mr-1 h-3 w-3" />
            20k */}
            <div className="flex items-center">
              <GitHubButton
                href={project.authorGithub}
                data-color-scheme="dark"
                data-show-count="true"
                aria-label="Follow user on GitHub"
              >
                Follow author
              </GitHubButton>
            </div>
          </div>
        </div>
      </CardContent>
      <CardContent className="hidden w-full">
        <div className="flex w-full items-center space-x-1 rounded-md bg-zinc-950 text-secondary-foreground">
          {/* <Button className="px-3 shadow-none w-full">Live url </Button> */}
          <Button className="px-3 shadow-none">Github</Button>
        </div>
      </CardContent>
    </Card>
  );
}
