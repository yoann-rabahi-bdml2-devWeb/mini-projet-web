import "./ProteinTable.css";

type ProteinTableProps = {
  objectives: string[];
  minWeight: number;
  maxWeight: number;
  rows: number;
};

function ProteinTable({ objectives, minWeight, maxWeight, rows }: ProteinTableProps) {

  if (rows <= 0 || minWeight >= maxWeight || objectives.length === 0) {
    return null; // rien à afficher
  }

  const step = rows > 1
    ? (maxWeight - minWeight) / (rows - 1)
    : 0;

  const weights = Array.from({ length: rows }, (_, i) =>
    Math.round(minWeight + i * step)
  );

  return (
    <div className="protein-table-container">
      <h2 className="table-title">Tableau des besoins en protéines</h2>

      <table className="protein-table">
        <thead>
          <tr>
            <th>Poids (kg)</th>
            {objectives.map(obj => (
              <th key={obj}>{obj}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {weights.map((weight, index) => (
            <tr key={index}>
              <td>{weight}</td>

              {objectives.map(obj => (
                <td key={obj + index}>—</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProteinTable;
