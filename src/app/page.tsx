import { CalculatorSection } from "@/components/CalculatorSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BookingSection } from "@/components/BookingSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <CalculatorSection />
      <SolutionSection />
      <BookingSection />
    </div>
  );
}
