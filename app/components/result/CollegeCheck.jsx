const LINKS = [
  ["Best BHM Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bhm-colleges-in-nepal"],
  ["Best Engineering Colleges in Nepal", "https://www.abroadadvise.com/featured/best-engineering-colleges-in-nepal"],
  ["Best BBA Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bba-colleges-in-nepal"],
  ["Best IT Colleges in Nepal", "https://www.abroadadvise.com/featured/best-it-colleges-in-nepal"],
  ["Best BCA Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bca-colleges-in-nepal"],
  ["Best BSW Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bsw-colleges-in-nepal"],
  ["Best BIM Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bim-colleges-in-nepal"],
  ["Best BSc CSIT Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bsc-csit-colleges-in-nepal"],
  ["Best BIT Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bit-colleges-in-nepal"],
  ["Best BBM Colleges in Nepal", "https://www.abroadadvise.com/featured/best-bbm-colleges-in-nepal"],
];

const rows = LINKS.reduce((acc, item, i) => {
  if (i % 2 === 0) acc.push([item]);
  else acc[acc.length - 1].push(item);
  return acc;
}, []);

export default function CollegeCheck() {
  return (
    <section className="py-10 px-4 border-b border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-base font-bold text-gray-700 mb-4 uppercase tracking-wider">Also Check:</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100 bg-white">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {row.map(([label, href]) => (
                    <td key={href} className="px-4 py-3 w-1/2">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {label}
                      </a>
                    </td>
                  ))}
                  {row.length === 1 && <td className="px-4 py-3 w-1/2" />}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
