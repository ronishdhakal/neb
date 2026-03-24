export default function HowToCheckIVR() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How to Check SEE Result 2082/2083 via IVR</h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
          Students can also check the SEE Result via IVR (Interactive Voice Response) service. Follow the steps below:
        </p>

        {/* Steps */}
        <div className="space-y-8 max-w-3xl">
          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">1.</div>
            <p className="text-gray-700 leading-relaxed">
              Open your phone dialer and dial <span className="font-semibold text-gray-900">1600</span>.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">2.</div>
            <p className="text-gray-700 leading-relaxed">Follow the instructions, and you will receive your result.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
