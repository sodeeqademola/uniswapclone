"use client";

import { NextUIProvider } from "@nextui-org/react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NextUIProvider>{children}</NextUIProvider>
    </div>
  );
};

export default Provider;
