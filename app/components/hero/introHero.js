import Image from "next/image";
import Container from "../container/container";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

export default function IntroHero() {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
                Craft Personal Portfolios for Your Coding Journey
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              
              DevX allows developers to build their personal portfolios, share their experiences, skills, projects, 
              and other achievements in their coding journey
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Get started
              </a>
              <Link
                href="/About"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <BiLinkExternal style={{fontSize: "25px"}}/>
                <span> Learn more</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
          <Image
              src="/img/introHero2.svg"
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
             
            />
          </div>
        </div>
      </Container>
      
    </>
  );
}



