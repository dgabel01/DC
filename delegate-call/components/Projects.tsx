"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const projectList = [
  { name: "Lingo Token Bridge", chains: "Base ↔ Solana | Wormhole" },
  { name: "NukeTheSupply", chains: "PulseChain, Solana" },
  { name: "HomeMate", chains: "Solana" },
  { name: "BattleBucks", chains: "Solana" },
  { name: "SkullFellas NFT", chains: "Ethereum" },
  { name: "theWager", chains: "Solana" },
];

const Projects = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 mt-24">
      <h1 className="text-center text-4xl font-bold mb-16">
        DelegateCall Projects
      </h1>

      <Carousel setApi={setApi} className="w-full relative">
        <CarouselContent>
          {projectList.map((project, index) => (
            <CarouselItem key={index} className="w-full md:basis-1/2">
              <Card className="h-full border-t border-b border-x-0 rounded-none">
                <CardContent className="flex flex-col aspect-autoi tems-center justify-center gap-4 p-6 text-center">
                  <span className="text-2xl font-semibold">&quot;{project.name}&quot;</span>
                  <span className="text-muted-foreground text-lg italic">
                    {project.chains}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Make sure these are inside the relatively positioned Carousel container */}
        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
      </Carousel>

      <div className="text-muted-foreground py-3 text-center text-md font-semibold">
        Project {current} of {count}
      </div>
    </section>
  );
};

export default Projects;
