// src/components/VoidGallery.jsx
import ScrollReveal, { ScrollRevealItem } from './ScrollReveal'

const galleryItems = [
  {
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALP2IQO3vqkgG2Ggs9JY-0Io37C5_n84SNpEo4JhAS4CcJjBoLSv1S4yimI6cTFFnqzoSbSj103Xp97_46XEDcQTX5Yr2Gtk-fENcXHjguiE10t7iRlQDm6pPFOTWOyyykFqIKN8umUA3BuojRwDRtGiwFaEoSpsqNonZIN1Rr917iInbsr5Qv4IvPVfonZhM7UyX5YzBPX6mYWxfip6R1f8t67_Yh3xAIBBBfdoi3pYAAoEj3Qfsf2hTWxwfXnzR-j-i-tRxZIw',
    alt: 'A breathtaking view of an infinite void with glowing geometric structures and abstract nebulae.',
    title: 'DOMAIN: INFINITY',
    isLarge: true,
  },
  {
    colSpan: 'md:col-span-2',
    rowSpan: '',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfA_C1BSdV3NtKCLh5zDhW-nxFC0hy6myaijM5hXvUChj0cQCV7XNAGRtaSU9-iygglptEmTH5ZLCEDBiFKWRLuOMfsuV63pJGragGKNr6J9nNeBlLH7kl-C_vL1DzE7HBfcAxm3XsXWFtC1I589pKnLxmNNE803UL0ICwvmmT60mTJVePHOnZQmwmDC9f6WvJdxh_I8SDomwfTotTK1cWcBNKepQqdU8P7uEfba5Z09PyNgJ00HpocsrirzqzP8R55PCdKItvaQ',
    alt: 'A dramatic scene featuring a landscape of countless swords and ancient weapons protruding from a desert floor under a blood-red sky.',
    title: 'Malevolent Shrine',
    showIcon: true,
  },
  {
    colSpan: '',
    rowSpan: '',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Wg95hPs4KAfx8KFxsAgylneUbGcBm8Xy2Eg2AH9nPZcvbsDrDOrbn1jvryRsiuYgXk_VQhHIVAaoLqlnCxbI84gHDc0-8dwCAvdH-9PDT4QcF3z08Y9-bV5msOZ5mtwxhgqQhYbpRPTh-oL6ReiSaklapIoxOpXlEheLAHG5x9agnqKynbQyyWIizIFLVRt3lzZgVUU_ECY5hPLgAP5_hycTk9k8EVYO1oPkOirbxnwWmPPEpb5C7VrpBwpUf7x93QVMAHMNew',
    alt: 'Abstract representation of dark energy or shadow play in a minimalist setting.',
    title: 'Shadow Garden',
  },
  {
    colSpan: '',
    rowSpan: '',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAg9MsYywV92LdAbS4ptNgccF6zv7TMHFSdj2_AvKvuVHJYSlOc4pXldlRtPktGKLnxwBJLhSUdFUVtmiNBn5N7F4NExcRSXEbYgQ1ky70086G62mETVethmX2kzcT9oFt_XUqkNTNYOuLkh5kCmqVz6rFpg-qGZ4Pc3tGQZRvy1FVM3jxOHoDxuY_ryHaUq1XhA5awzFkWzfs9EsSEsttUqiY0DjU5dkgZSNnSHMvHizRLcinH91zmZwaUs23H1wLoyJGZvKKsNg',
    alt: 'Vibrant cosmic nebula with intense purples and pinks, representing high-level cursed energy manipulation.',
    title: 'Hollow Purple',
  },
]

export default function VoidGallery() {
  return (
    <section className="py-32 px-margin-desktop max-w-container-max mx-auto">
      {/* Header */}
      <ScrollReveal className="mb-16 text-center" delay={0.05} duration={0.8}>
        <h2 className="font-display-lg text-headline-lg text-primary text-glow uppercase">
          VOID GALLERY
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Archived glimpses into the expansion of various domains.
        </p>
      </ScrollReveal>

      {/* Bento Grid */}
      <ScrollReveal className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[800px]" staggerChildren delay={0.15}>
        {galleryItems.map((item) => (
          <ScrollRevealItem
            key={item.title}
            className={`${item.colSpan} ${item.rowSpan} glass-panel p-1 flex flex-col group`}
          >
            <div className="relative flex-grow overflow-hidden">
              <img
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={item.imageSrc}
              />
              {item.isLarge && (
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
            <div
              className={`${
                item.isLarge ? 'p-6' : 'p-4'
              } bg-surface-container-low flex justify-between items-center`}
            >
              <h5
                className={
                  item.isLarge
                    ? 'font-headline-md text-headline-md'
                    : 'font-label-caps text-label-caps uppercase'
                }
              >
                {item.title}
              </h5>
              {item.showIcon && (
                <span className="material-symbols-outlined text-primary text-sm">
                  open_in_new
                </span>
              )}
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollReveal>
    </section>
  )
}