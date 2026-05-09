// src/components/SorcerersSection.jsx
import ScrollReveal, { ScrollRevealItem } from './ScrollReveal'

const sorcerers = [
  {
    name: 'GOJO SATORU',
    grade: 'Grade: Special',
    gradeClass: 'text-primary',
    buttonClass:
      'bg-primary/20 backdrop-blur-md border border-primary/30 text-primary',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9hB4Pj5LY3q3lMSy325Ye4DoWuIdw-vY0NoEaE3xX1RSQDZEwuwGM89hWd4MI671vsDPk1LejmEAWNTiHXabxNC2C2bj7-IOy3ybD5crlNhWwaaAAyqcW4yT6pP9NtfGeibT4T0ulZ8PhoaeF-z7JnmOTiEmyVph8jtzZA0a46tRQAktyMG2pup9S4jh_iFvfi1ZKRD7Qctbb9bDYmM-xr_nFFVcU6gqgU--FIH9don_K6J1YsJoVMd3BDxceOZArRtSkQMDLMg',
    alt: 'A cinematic portrait of a powerful sorcerer with white hair and glowing blue eyes, wearing a sleek black futuristic tactical uniform.',
  },
  {
    name: 'FUSHIGURO MEGUMI',
    grade: 'Grade: 1',
    gradeClass: 'text-primary',
    buttonClass:
      'bg-primary/20 backdrop-blur-md border border-primary/30 text-primary',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABDOtezMVL9kU7xZSg-RIVCj2JFffEh7aui4mmwUQIoxA2LSzozsUof-pQf8YBnonsIa65JNSfyNCHFSi2aTE_qAfrbI7cIRPX0_AlW4oImU3uNJsK-vdxrfm8WQzQhmgFX_O4wEC5CqrvG3N9gT5sQRiunuan-VjCMLxsIq-tjels8dVk9PtbwsBiSrP-YLqWCM40QrpFq6uKhjO5UuH3GU1NdAoVfYjfIYgfq83N7gJcu7h2pJM88kriCHtVXQvtZa0WiTl38g',
    alt: 'A stoic warrior character with dark hair and intense focus, clad in dark traditional-modern hybrid robes.',
  },
  {
    name: 'KUGISAKI NOBARA',
    grade: 'Grade: 3',
    gradeClass: 'text-primary',
    buttonClass:
      'bg-primary/20 backdrop-blur-md border border-primary/30 text-primary',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d07V4HlKooLpV8BZrbZJ8SBiQ8IcsCIu7Zg-mGC6n9OShft6jS_CPN0JgffeX0tVaYAqRnymVGdTDEjf0d8rD1wHmkmCNlhSqjbsgGxlMgdlGQbGsSJN2IxxtlrE-ty5R1_cL918gQ8l6PNl1MzwzOXobGerOuce-BwqZoZI-Paylf6fNocQG71sl8FOExw2ssyqFo5S2WxKFJ_I4wCY8J07hIKGQlbn5OFHEFUEr3jc6Vq6aMcT-hdnqWiIujm5DgPWQQoNcg',
    alt: 'An energetic female sorcerer with short reddish-brown hair, wielding a cursed weapon in a navy blue uniform.',
  },
  {
    name: 'GETO SUGURU',
    grade: 'Curse: Special',
    gradeClass: 'text-error',
    buttonClass:
      'bg-error/20 backdrop-blur-md border border-error/30 text-error',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqVMuc7jbM4WvmzWeyYAC6N4iN6ELqeQEhWI2RH-IK17gfxSYZpDBtTbXP71yARSGgq0yRXEPCFni-QqN3lwqwECSwKGVANBuBJmxFZOaSZYQL1ESKdPkzobXPmdNK39c3qhtFg1XZ5KRmMcyjcUwj_CTkBqWfyHwmto0kO2uoXBGK1wE3tP9fchYS6yWBDgOzwsubQRNDRYuVO-n5GnnMpNmHouv8TOQhDgVwVCbzxd-X3eqk3tzgP-Jf45AzVISQynTpsY_7YQ',
    alt: 'A brooding figure with long dark hair, wearing traditional priest vestments accented with futuristic digital patterns.',
  },
]

export default function SorcerersSection() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="px-margin-desktop max-w-container-max mx-auto">
        {/* Section Header */}
        <ScrollReveal
          className="mb-20"
          delay={0.05}
          duration={0.75}
          direction="up"
        >
          <h2 className="font-display-lg text-headline-lg text-on-surface mb-4">
            THE CURSERS
          </h2>
          <div className="w-24 h-1 bg-primary" />
        </ScrollReveal>

        {/* Character Grid */}
        <ScrollReveal
          className="grid grid-cols-1 md:grid-cols-4 gap-gutter"
          staggerChildren
          delay={0.15}
        >
          {sorcerers.map((char) => (
            <ScrollRevealItem
              key={char.name}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img
                alt={char.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={char.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span
                  className={`font-label-caps text-label-caps ${char.gradeClass} uppercase block mb-1`}
                >
                  {char.grade}
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface">
                  {char.name}
                </h4>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className={`w-full py-2 font-label-caps text-label-caps uppercase ${char.buttonClass}`}
                  >
                    View Records
                  </button>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}