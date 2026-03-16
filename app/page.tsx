import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import WhoWeServe from '@/components/WhoWeServe'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhoWeServe />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
