import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  classname?: string;
}

const PicoButton = ({ title, classname }: Props) => {
  return (
    <div>
      <Button
        className={`h-[50px] w-[160px] rounded-3xl border border-picoTeal bg-transparent text-picoTeal ${classname}`}
        variant="outline"
      >
        <h1> {title}</h1>
      </Button>
    </div>
  );
};

export default PicoButton;
