import Loading from "@/app/dashboard/overview/loading";
import React, { Suspense } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default layout;
