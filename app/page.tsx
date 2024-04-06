import { Suspense } from "react";
import ExchangeWrapper from "@/app/_features/exchange/ExchangeWrapper";
import ExchangeFallback from "@/app/_features/exchange/ExchangeFallback";

export default function ExchangePage() {
  return (
    <Suspense fallback={<ExchangeFallback />}>
      <ExchangeWrapper />
    </Suspense>
  );
}
