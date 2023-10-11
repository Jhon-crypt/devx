'use client'
import Header from "../components/header/header"
import Section from "../components/section/section"
import { benefitOne } from "../components/data/data"
import BenefitSection from "../components/section/benefitsSection"
import Faq from "../components/section/faqSection"
import CtaSection from "../components/section/ctaSection"
import Footer from "../components/footer/footer"

export default function About() {

    return (

        <>

            <div className="px-5">
                <Header />
            </div>

            <div className="px-6">
                <Section pretitle="About DevX"
                    title=" Why should you use DevX">
                    Craft your coding journey with our platform and create a portfolio that showcases 
                    your skills, projects, career progression, share your experiences, and inspire others. Our user-friendly tools make it easy to design a 
                    portfolio that reflects your unique journey, helping you stand  and elevate your online presence as 
                    a developer.
                </Section>
                <BenefitSection data={benefitOne} />
                <Section pretitle="FAQ"
                    title="Frequently Asked Questions">
                    Craft your coding journey with our platform and create a portfolio that showcases 
                    your skills, projects, career progression, share your experiences, and inspire others
                </Section>
                <Faq />
                <CtaSection />
                
            </div>

            <div className="px-5">
                <Footer />
            </div>

        </>

    )

}