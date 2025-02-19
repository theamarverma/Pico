import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
}

const PicoButton = ({ title }: Props) => {
  return (
    <div>
      <Button
        className="h-[50px] w-[160px] rounded-3xl border border-picoTeal bg-transparent text-picoTeal"
        variant="outline"
      >
        {title}
      </Button>
    </div>
  );
};

export default PicoButton;
