import Wrapper from "@/components/Wrapper";
import SubscriptionHeading from "@/components/subscription/SubscriptionHeading";
import OurGoal from "@/components/subscription/OurGoal";
import HelpCounter from "@/components/subscription/HelpCounter";
import HowItWorks from "@/components/subscription/HowItWorks";
import MonthlyForm from "@/components/subscription/Form";
import { activitiesData } from "@/data/activitiesData";
import Contact from "@/components/adoption/Contact";
import AdoptionForm from "@/components/adoption/adoptionForm";

export default function Home() {
  return (
    <main className="overflow-hidden w-[100%] z-20">
      <SubscriptionHeading />
      <HelpCounter />
      <Wrapper className="bg-blue-50 pt-20 poppins-medium flex flex-col gap-20">
        <OurGoal />
        <HowItWorks />
        <MonthlyForm />
        <Contact />

      </Wrapper>
    </main>
  );
}
