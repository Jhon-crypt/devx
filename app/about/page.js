import Header from "../components/header/header"
import Section from "../components/section/section"
import { benefitOne, benefitTwo } from "../components/data/data"

export default function About() {

    return (

        <>

            <div className="px-5">
                <Header />
            </div>

            <Section pretitle="Nextly Benefits"
                title=" Why should you use this landing page">
                Nextly is a free landing page & marketing website template for startups
                and indie projects. Its built with Next.js & TailwindCSS. And its
                completely open-source.
            </Section>

        </>

    )

}