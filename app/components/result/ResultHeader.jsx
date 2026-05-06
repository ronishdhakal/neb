export default function ResultHeader() {
  const whatsappMessage = encodeURIComponent("I have note of ");
  const whatsappLink = `https://wa.me/9745450062?text=${whatsappMessage}`;

  return (
    <section className="w-full bg-white py-2 sm:py-3 md:py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-2">
        {/* Main Content - Centered */}
        <div className="text-center">

          {/* Contribution Section */}
          

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-1 sm:mb-1">
            Class 12 RESULT 2083
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-2 md:mb-2">
            Check your examination results securely and instantly
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 max-w-2xl mx-auto">
            <input
              type="text"
              disabled
              placeholder="eg: 01234567A"
              className="w-full px-4 sm:px-5 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 outline-none placeholder-gray-500 disabled:cursor-not-allowed disabled:opacity-60 text-sm sm:text-base"
            />

            <button
              disabled
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base whitespace-nowrap"
            >
              Submit
            </button>
          </div>

          {/* Result Not Published Message */}
          <p className="mt-1 sm:mt-1 text-sm font-medium text-red-600">
            Result not published yet
          </p>
        </div>
      </div>
    </section>
  );
}