// src/components/HeroSection.jsx
import ScrollReveal from './ScrollReveal'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Unlimited Void"
          className="w-full h-full object-cover"
          style={{ imageRendering: 'crisp-edges' }}
          src={`${import.meta.env.BASE_URL}screen.png`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <ScrollReveal
        className="relative z-10 text-center px-margin-mobile md:px-margin-desktop"
        delay={0.1}
        duration={0.9}
        direction="up"
      >
        {/* Badge */}
        <div className="inline-block px-4 py-1 mb-8 bg-surface-container-highest/80 backdrop-blur-md border border-primary/20 rounded-full">
          <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase">
            Special Grade Interface
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display-lg text-[120px] leading-[100px] md:text-display-lg text-on-surface text-glow uppercase mb-6">
          UNLIMITED VOID
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-on-surface-variant mb-12">
          Step into the pinnacle of Jujutsu tech. Experience the absolute infinity
          through our premium cursed energy streaming matrix.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-gutter justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-5 font-headline-md text-headline-md uppercase tracking-wide hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all duration-300 scale-100 hover:scale-105 active:scale-95">
            DOMAIN EXPANSION
          </button>
          <button className="glass-panel border border-primary/30 text-primary px-10 py-5 font-headline-md text-headline-md uppercase tracking-wide hover:bg-primary/10 transition-all duration-300">
            VIEW MANIFESTO
          </button>
        </div>
      </ScrollReveal>

      {/* Geometric Accent */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent opacity-50" />
    </section>
  )
}