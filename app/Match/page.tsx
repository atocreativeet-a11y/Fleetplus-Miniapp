"use client";

import { Suspense } from "react";
import Match from "./match";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Match />
    </Suspense>
  );
}
