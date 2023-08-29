import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HeroSection from "@/components/section/hero"
import PreviewSection from "@/components/section/preview"
import FeaturesSection from "@/components/section/features"
import PricingSection from "@/components/section/pricing"

export default function IndexPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <PreviewSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  )
}
