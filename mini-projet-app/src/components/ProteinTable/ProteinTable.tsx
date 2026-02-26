import "./ProteinTable.css";
import { OBJECTIVES } from "../../data/Objectives";

type ProteinTableProps = {
  objectives: string[];
  minWeight: number;
  maxWeight: number;
  rows: number;
};

function ProteinTable({ objectives, minWeight, maxWeight, rows }: ProteinTableProps) {

  if (
    objectives.length === 0 ||
    !minWeight ||
    !maxWeight ||
    !rows ||
    minWeight >= maxWeight
  ) {
    return null;
  }

  const step = rows > 1
    ? (maxWeight - minWeight) / (rows - 1)
    : 0;

  const weights = Array.from({ length: rows }, (_, i) =>
    Math.round(minWeight + i * step)
  );

  const exportCSV = () => {
    const header = ["Poids (kg)", ...objectives];

    const rowsData = weights.map((weight) => {
      const cols = objectives.map((label) => {
        const obj = Object.values(OBJECTIVES).find(o => o.label === label);
        if (!obj) return "";

        const min = (weight * obj.min).toFixed(1);
        const max = (weight * obj.max).toFixed(1);

        return `${min}-${max}`;
      });

      return [weight.toString(), ...cols];
    });

    const csvContent =
      [header, ...rowsData]
        .map(row => row.join(";"))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "besoins_proteines.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="protein-table-container">

      <div className="table-header">
        <h2 className="table-title">Tableau des besoins en protéines</h2>

        <button className="export-btn" onClick={exportCSV}>
          Exporter en CSV
        </button>
      </div>

      <table className="protein-table">
        <thead>
          <tr>
            <th>Poids (kg)</th>
            {objectives.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {weights.map((weight, index) => (
            <tr key={index}>
              <td>{weight}</td>

              {objectives.map((label) => {
                const obj = Object.values(OBJECTIVES).find(o => o.label === label);

                if (!obj) return <td key={label + index}>—</td>;

                const min = (weight * obj.min).toFixed(1);
                const max = (weight * obj.max).toFixed(1);

                return (
                  <td key={label + index}>
                    {min}–{max} g
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProteinTable;
