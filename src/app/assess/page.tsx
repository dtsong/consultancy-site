import { Container } from "@/components/Container";
import { AssessmentFlow } from "./AssessmentFlow";

export const metadata = {
  title: "AI Readiness Assessment - Klearpath",
  description:
    "Discover your organization's AI opportunities in 4 minutes. Get personalized use case recommendations for regulated industries.",
};

export default function AssessPage() {
  return (
    <section className="bg-offwhite bg-grid-pattern min-h-[calc(100vh-80px)] py-16 md:py-24">
      <Container>
        <AssessmentFlow />
      </Container>
    </section>
  );
}
