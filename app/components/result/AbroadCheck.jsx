const LINKS = [
  ["Best Consultancy in Nepal (Overall)", "https://www.abroadadvise.com/featured/best-consultancy-in-nepal"],
  ["Best Consultancy in Nepal for Australia", "https://www.abroadadvise.com/featured/best-consultancy-in-nepal-for-australia"],
  ["Best Consultancy in Nepal for USA", "https://www.abroadadvise.com/featured/best-consultancy-in-nepal-for-usa"],
  ["Best Consultancy in Nepal for Canada", "https://www.abroadadvise.com/featured/best-consultancy-in-nepal-for-canada"],
  ["Best Consultancy in Nepal for UK", "https://www.abroadadvise.com/featured/best-consultancy-in-nepal-for-uk"],
  ["Best Consultancy in Nepal for New Zealand", "https://www.abroadadvise.com/featured/best-consultancy-in-nepal-for-new-zealand"],
  ["Best IELTS Classes in Kathmandu", "https://www.abroadadvise.com/featured/best-ielts-classes-in-kathmandu"],
  ["Best PTE Classes in Kathmandu", "https://www.abroadadvise.com/featured/best-pte-classes-in-kathmandu"],
];

const rows = LINKS.reduce((acc, item, i) => {
  if (i % 2 === 0) acc.push([item]);
  else acc[acc.length - 1].push(item);
  return acc;
}, []);

export default function AbroadCheck() {
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
