import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function SpeakingSection({children, ...props}) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    )
}

function Appearance({title, description, event, cta, href}) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Eyebrow decorate>{event}</Card.Eyebrow>
            <Card.Description>{description}</Card.Description>
            <Card.Cta>{cta}</Card.Cta>
        </Card>
    )
}

export default function Speaking() {
    return (
        <>
            <Head>
                <title>Speaking - Benjamin Takats</title>
                <meta
                    name="description"
                    content="I’ve spoken at Bitcoin events and been interviewed for podcasts."
                />
            </Head>
            <SimpleLayout
                title="I’ve spoken at Bitcoin events and been interviewed for podcasts."
                intro="Bitcoin is a new kind of money. It’s a new kind of technology. It’s a new kind of community."
            >
                <div className="space-y-20">
                    <SpeakingSection title="Conferences">
                        <Appearance
                            href="https://www.youtube.com/watch?v=fXsyVZqVyoU"
                            title="Vortrag - Code is Speech"
                            description="Ziel der Veranstaltung ist es die Bitcoin Adoption voranzubringen, sich mit gleichgesinnten Menschen auszutauschen und jede Menge Spaß zu haben."
                            event="Bitcoin im Ländle"
                            cta="Visit"
                        />
                    </SpeakingSection>
                    {/*<SpeakingSection title="Podcasts">
                        <Appearance
                            href="https://einundzwanzig.space/podcast/news-168-the-bitcoin-rangers/"
                            title="The Bitcoin Rangers"
                            description="Developing Einundzwanzig Portal, a decentralized social network for Bitcoiners."
                            event="Einundzwanzig Podcast"
                            cta="Listen to podcast"
                        />
                        <Appearance
                            href="https://einundzwanzig.space/podcast/news-202-wer-das-liest-ist-doof/"
                            title="Bitcoin News"
                            description="Bitcoin News with me."
                            event="Einundzwanzig Podcast"
                            cta="Listen to podcast"
                        />
                    </SpeakingSection>*/}
                </div>
            </SimpleLayout>
        </>
    )
}
