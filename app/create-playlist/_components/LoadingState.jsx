import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function LoadingSkeleton() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex py-2 pr-6 items-center space-x-4">
          <Skeleton className="bg-gray-500 h-12 w-12 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="bg-gray-500 h-4 w-[80px]" />
            <Skeleton className="bg-gray-500 h-4 w-[180px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
