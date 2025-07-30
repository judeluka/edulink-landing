import { Metadata } from 'next'
import Hero from '@/components/Hero'
import StakeholderConnection from '@/components/StakeholderConnection'
import ProblemSolution from '@/components/ProblemSolution'
import FeatureShowcase from '@/components/FeatureShowcase'
import FeaturesEcosystem from '@/components/FeaturesEcosystem'
import EarlyAccessCTA from '@/components/EarlyAccessCTA'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'EduLink | The Future of Language School Management',
  description: 'Transform your ELTO operations with one intelligent platform. Built specifically for Irish language schools. Launching November 2025.',
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ProblemSolution />
      <StakeholderConnection />
      <FeatureShowcase />
      <FeaturesEcosystem />
      <EarlyAccessCTA />
      <CTA />
    </main>
  )
}
