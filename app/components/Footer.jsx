import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/assets/logo.svg"
                alt="Class 12 Result Logo"
                width={180}
                height={180}
                priority
                className="object-contain"
              />
            </Link>

            <p className="mt-4 text-sm text-gray-300 leading-6 max-w-sm">
              Check Class 12 Result 2083/2083 online through a secure and reliable
              platform. Get your examination results instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="https://www.collegeinfonepal.com/college" className="hover:text-white transition">
                  Colleges
                </Link>
              </li>
              <li>
                <Link href="https://www.collegeinfonepal.com/course" className="hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="https://www.collegeinfonepal.com/contact-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://www.collegeinfonepal.com/contact-us" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@collegeinfonepal.com</li>
              <li>Phone: +977-9745450062</li>
              <li>Location: Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} College Info Nepal Pvt. Ltd. All rights reserved.
          </p>

          <p className="text-xs text-slate-400">
            Powered by <span className="font-semibold text-slate-100">College Info Nepal Pvt. Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

