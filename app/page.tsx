import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import PriceCalculator, { type Plan, type Tier } from "@/components/PriceCalculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HUB_URL = "https://hub.venduzz.com.br";

async function getPlans(): Promise<Plan[]> {
  try {
    const res = await fetch(`${HUB_URL}/api/public/plans`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.plans ?? [];
  } catch {
    return [];
  }
}

async function getTiers(): Promise<Tier[]> {
  try {
    const res = await fetch(`${HUB_URL}/api/public/tiers`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.tiers ?? [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const [plans, tiers] = await Promise.all([getPlans(), getTiers()]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing plans={plans} />
        <PriceCalculator plans={plans} tiers={tiers} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
