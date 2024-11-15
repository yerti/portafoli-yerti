
import MainLayout from "app/shared/layout/MainLayout";
import React, { PropsWithChildren } from "react";


export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
