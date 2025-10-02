import { useLocation } from "react-router-dom";
import "./Download.css";

function Download() {
  const location = useLocation();
  const { papers = [] } = location.state || {};

  // Group by subject
  const groupedBySubject = papers.reduce((acc, paper) => {
    if (!acc[paper.subject]) {
      acc[paper.subject] = [];
    }
    acc[paper.subject].push(paper);
    return acc;
  }, {});

  return (
    <div className="download-page">
      <h2 className="page-title">Available Papers</h2>

      {Object.keys(groupedBySubject).length === 0 ? (
        <p className="no-papers">No papers found</p>
      ) : (
        Object.entries(groupedBySubject).map(([subject, subjectPapers]) => (
          <div key={subject} className="subject-card">
            <h3 className="subject-title">{subject}</h3>
            <table className="papers-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Month</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {subjectPapers.map((paper, index) => (
                  <tr key={index}>
                    <td>{paper.year}</td>
                    <td>{paper.month}</td>
                    <td>
                      <a
                        href={paper.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
}

export default Download;
