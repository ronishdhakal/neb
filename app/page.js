import Script from "next/script";
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import ResultHeader from "@/app/components/result/ResultHeader"
import ResultAbout from "@/app/components/result/ResultAbout"
import HowToCheckOnline from "@/app/components/result/HowToCheckOnline"
import HowToCheckSMS from "@/app/components/result/HowToCheckSMS"
import HowToCheckIVR from "@/app/components/result/HowToCheckIVR"
import AfterSeeResult from "@/app/components/result/AfterSeeResult"
import ResultFAQs from "@/app/components/result/ResultFAQs"
import GradingSystemTable from "@/app/components/result/GradingSystemTable"
import AbroadCheck from "@/app/components/result/AbroadCheck"
import CollegeCheck from "@/app/components/result/CollegeCheck"

export default function Home() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3H8YGYXHPP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3H8YGYXHPP');
        `}
      </Script>

      <Navbar />

      <div className="max-w-3xl mx-auto px-2 py-1">
        <a href="https://entrance.collegeinfonepal.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/entrance-for-class-12.jpg"
            alt="Entrance for Class 12"
            width={385}
            height={30}
            className="w-full h-auto rounded"
            priority
          />
        </a>
      </div>

      <main className="w-full">
        <ResultHeader />

        <div className="max-w-3xl mx-auto px-2 py-1">
          <a href="https://www.abroadadvise.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/abroad-advise.jpg"
              alt="Abroad Advise"
              width={900}
              height={120}
              className="w-full h-auto rounded"
            />
          </a>
        </div>

        <AbroadCheck />
        <ResultAbout />
        <CollegeCheck />
        <HowToCheckOnline />
        <HowToCheckSMS />
        <HowToCheckIVR />
        <AfterSeeResult />
        <GradingSystemTable />
        <ResultFAQs />

      </main>

      <Footer />
    </>
  )
}