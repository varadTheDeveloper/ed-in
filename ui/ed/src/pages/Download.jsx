import { useState } from 'react'

import './Download.css'

function Download() {
  const [count, setCount] = useState(0)

 const data = [
    { year: 2025, month: "May", link: "#" },
    { year: 2024, month: "May", link: "#" },
    { year: 2024, month: "December", link: "#" },
    { year: 2023, month: "May", link: "#" },
    { year: 2023, month: "December", link: "#" },
    { year: 2022, month: "December", link: "#" },
    { year: 2022, month: "May", link: "#" },
  ];

  return (
    <div className="table-container">
      <h2 className="table-title">
        ENGINEERING MATHEMATICS-III (REV-2019 ‘C’ SCHEME)
      </h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.month}</td>
              <td>
                <a href={row.link} className="download-btn">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Download
