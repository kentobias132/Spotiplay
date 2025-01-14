import React from "react";
import { Button } from "@/components/ui/button";

function CustomButton({ text, actionHandler, track }) {
  return (
    <Button
      className="border hover:bg-green-900"
      onClick={() => actionHandler(track)}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
