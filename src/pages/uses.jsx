import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Benjamin Takats</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Asus ROG Strix Laptop">
              I’ve been using this laptop for years and it’s still going strong.
              RAM was upgraded to 64GB, so it’s a beast.
            </Tool>
            <Tool title="ROG SWIFT PG248Q">
              Solid gaming monitor. I use it for work and gaming.
            </Tool>
            <Tool title="Ducky One 3 Series">
              Mechanical keyboard with Cherry MX quiet red switches.
            </Tool>
            <Tool title="Razer DeathAdder">
              Cable mouse with a nice ergonomic shape.
            </Tool>
            <Tool title="Gaming Chair">
              I don’t know what it’s called but it’s a nice chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="PHPStorm">
              JetBrains makes the best IDEs.
            </Tool>
            <Tool title="Garuda Linux">
              Linux is the best operating system.
            </Tool>
            <Tool title="PHP">
              My language of choice.
            </Tool>
            <Tool title="Laravel">
              Framework for the win.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Tailwindcss">
              CSS that doesn’t suck.
            </Tool>
            <Tool title="Tailwind-UI">
              Nice components for Tailwindcss.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Spatie">
              Spatie Laravel packages are the best.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
