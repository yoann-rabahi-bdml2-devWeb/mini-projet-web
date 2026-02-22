import "./ProteinForm.css";
import { OBJECTIVES } from "../../data/Objectives";
import React, { useState } from "react";
import ProteinTable from "../ProteinTable/ProteinTable";

const labels = Object.values(OBJECTIVES).map(obj => obj.label);

function ProteinForm() {
  type FormData = {
  objectives: string[];
  minWeight: number;
  maxWeight: number;
  rows: number;
};

const [formData, setFormData] = useState<FormData>({
  objectives: [],
  minWeight: 0,
  maxWeight: 0,
  rows: 0
});


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        objectives: checked
          ? [...prev.objectives, value]
          : prev.objectives.filter(o => o !== value)
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  return (
    <>
      <form className="protein-form">

        <h2 className="form-title">Paramètres du calcul</h2>

        {/* Objectifs */}
        <div className="form-section">
          <h3 className="section-title">Objectifs</h3>

          <div className="checkbox-container">
            {labels.map(label => (
              <label key={label} className="checkbox-item">
                <input
                  type="checkbox"
                  name="objectives"
                  value={label}
                  onChange={handleChange}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Poids */}
        <div className="form-section">
          <h3 className="section-title">Poids (kg)</h3>

          <div className="input-row">
            <label className="form-field">
              Poids minimum
              <input
                type="number"
                name="minWeight"
                value={formData.minWeight}
                onChange={handleChange}
              />
            </label>

            <label className="form-field">
              Poids maximum
              <input
                type="number"
                name="maxWeight"
                value={formData.maxWeight}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        {/* Lignes */}
        <div className="form-section">
          <h3 className="section-title">Génération</h3>

          <label className="form-field">
            Nombre de lignes
            <input
              type="number"
              name="rows"
              value={formData.rows}
              onChange={handleChange}
            />
          </label>
        </div>

      </form>

      {/* Le tableau dépend directement du formulaire */}
      <ProteinTable
        objectives={formData.objectives}
        minWeight={formData.minWeight}
        maxWeight={formData.maxWeight}
        rows={formData.rows}
      />
    </>
  );
}

export default ProteinForm;
