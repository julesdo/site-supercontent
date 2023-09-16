import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HeroSection from "@/components/section/hero"
import PreviewSection from "@/components/section/preview"
import FeaturesSection from "@/components/section/features"
import PricingSection from "@/components/section/pricing"
import BlogSection from "@/components/section/blog"
import TemplateSection from "@/components/section/template"

export default function IndexPage() {
  return (
    <div id="home" className="w-full scroll-smooth">
      <HeroSection />
      <PreviewSection />
      <FeaturesSection />
      <TemplateSection />
      <PricingSection />
    </div>
  )
}
