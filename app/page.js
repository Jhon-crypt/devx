import Image from 'next/image'
import Header from './components/header/header'
import IntroHero from './components/hero/introHero'

export default function Home() {
  return (

    <>
      <div className="px-5">
        <Header />
      </div>
        <div className="px-6">
          <IntroHero />
        </div>
        
      

    </>

  )
}
