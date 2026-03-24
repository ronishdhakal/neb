export default function GradingSystemTable() {
  const gradingData = [
    { sn: "1.", percentage: "90 to 100", grade: "A+", desc: "Outstanding", gp: "4.0" },
    { sn: "2.", percentage: "80 to below 90", grade: "A", desc: "Excellent", gp: "3.6" },
    { sn: "3.", percentage: "70 to below 80", grade: "B+", desc: "Very Good", gp: "3.2" },
    { sn: "4.", percentage: "60 to below 70", grade: "B", desc: "Good", gp: "2.8" },
    { sn: "5.", percentage: "50 to below 60", grade: "C+", desc: "Satisfactory", gp: "2.4" },
    { sn: "6.", percentage: "40 to below 50", grade: "C", desc: "Acceptable", gp: "2.0" },
    { sn: "7.", percentage: "35 and above", grade: "D", desc: "Basic", gp: "1.6" },
    { sn: "8.", percentage: "Below 35", grade: "NG", desc: "Non-Graded", gp: "-" },
  ]

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10">
          Grading System and Points used on Marksheet
        </h2>

        {/* Table Card */}
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-blue-50 text-gray-900">
                <tr>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-xs sm:text-sm">SN</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-xs sm:text-sm">Percentage (%)</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-xs sm:text-sm">Grade</th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-xs sm:text-sm hidden sm:table-cell">
                    Description
                  </th>
                  <th className="px-4 sm:px-6 py-4 font-semibold text-xs sm:text-sm">GP</th>
                </tr>
              </thead>

              <tbody>
                {gradingData.map((row, index) => (
                  <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm">{row.sn}</td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm">{row.percentage}</td>
                    <td className="px-4 sm:px-6 py-4 font-semibold text-xs sm:text-sm">{row.grade}</td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm hidden sm:table-cell">{row.desc}</td>
                    <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm">{row.gp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
