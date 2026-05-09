// src/components/FeaturesSection.jsx
import ScrollReveal, { ScrollRevealItem } from './ScrollReveal'

const features = [
  {
    icon: 'bolt',
    title: 'REVERSED TECHNIQUE',
    description:
      'Healing frames and optimized playback speeds that defy standard biological limits.',
    progress: 75,
  },
  {
    icon: 'layers',
    title: 'INFINITY BUFFERING',
    description:
      'A space where time stops. Zero-latency streaming across all spectral dimensions.',
    progress: 92,
  },
  {
    icon: 'visibility',
    title: 'SIX EYES RENDERING',
    description:
      'Atomic-level detail in every frame. See the flow of energy as it was intended.',
    progress: 100,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-32 px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      {/* Header */}
      <ScrollReveal staggerChildren className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8" delay={0.05}>
        <div className="max-w-xl">
          <h2 className="font-display-lg text-headline-lg text-primary mb-4">
            CURSED ENERGY
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Unleashing the fundamental forces of the Jujutsu world through
            high-fidelity visual manifestations.
          </p>
        </div>
        <div className="text-right">
          <span className="font-display-lg text-display-lg text-surface-container-highest/30 select-none">
            01
          </span>
        </div>
      </ScrollReveal>

      {/* Feature Cards */}
      <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-gutter" staggerChildren delay={0.15}>
        {features.map((feature) => (
          <ScrollRevealItem
            key={feature.title}
            className="glass-panel-heavy p-8 border border-outline-variant/10 group hover:border-primary/40 transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-8">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {feature.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              {feature.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              {feature.description}
            </p>
            <div className="h-1 w-full bg-surface-container-highest scan-line">
              <div
                className="h-full bg-primary shadow-[0_0_10px_rgba(0,218,248,0.8)]"
                style={{ width: `${feature.progress}%` }}
              />
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollReveal>
    </section>
  )
}