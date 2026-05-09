// src/components/CTASection.jsx
import ScrollReveal from './ScrollReveal'

export default function CTASection() {
  return (
    <section className="py-32 px-margin-mobile">
      <ScrollReveal
        className="max-w-4xl mx-auto glass-panel-heavy p-12 md:p-20 text-center border-primary/20 relative overflow-hidden"
        delay={0.05}
        duration={0.85}
        direction="up"
      >
        {/* Top and bottom accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        <h2 className="font-display-lg text-headline-lg text-on-surface mb-6">
          READY TO EXPAND?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg mx-auto">
          Join the elite ranks of Tokyo Jujutsu High. Unlock the archives and
          master your cursed technique today.
        </p>

        <div className="flex flex-col md:flex-row gap-gutter justify-center items-center">
          <input
            className="bg-transparent border-0 border-b border-primary/50 text-on-surface font-label-caps text-label-caps focus:ring-0 focus:border-primary w-full md:w-80 px-4 py-3 placeholder:text-on-surface-variant/50"
            placeholder="CURSED_ENERGY@PROTOCOL.COM"
            type="email"
          />
          <button className="bg-primary text-on-primary px-10 py-3 font-headline-md text-headline-md uppercase hover:bg-primary-fixed-dim transition-colors w-full md:w-auto">
            INITIATE VOW
          </button>
        </div>
      </ScrollReveal>
    </section>
  )
}