import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="h-6 w-6 text-indigo-600" />
      <span className="pl-2">{feature}</span>
    </div>
  );
};

export default Feature;
