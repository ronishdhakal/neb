export default function HowToCheckSMS() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How to Check SEE Result 2082/2083 via SMS</h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-12">
          There are several companies that provide SEE Result via SMS services. Companies like Nepal Telecom, Swift
          Technology Pvt. Ltd., Janaki Technology Pvt. Ltd., Aakash Tech Pvt. Ltd., and others publish the result via
          SMS. Below is the most common way to check the SEE Result via SMS:
        </p>

        {/* Content Grid */}
        <div className="space-y-8 max-w-3xl">
          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">1.</div>
            <p className="text-gray-700 leading-relaxed">
              Open your messaging app on your mobile phone with a SIM card inserted.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">2.</div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Create a new message and type:{" "}
                <span className="font-semibold text-gray-900">SEE &lt;space&gt; Symbol-Number</span>
              </p>
              <p className="text-gray-600 mt-2">
                Example: <span className="font-semibold text-gray-900">SEE 3208984</span>
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 font-semibold text-lg text-gray-900 w-8">3.</div>
            <p className="text-gray-700 leading-relaxed">
              Send the SMS to <span className="font-semibold text-gray-900">1600, 31003, 35001</span>, or other
              designated numbers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
