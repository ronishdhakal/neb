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

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full">
        <ResultHeader />
        <ResultAbout />
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
