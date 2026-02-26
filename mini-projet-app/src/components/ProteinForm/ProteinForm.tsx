import "./ProteinForm.css";
import { OBJECTIVES } from "../../data/Objectives";
import React, { useState } from "react";
import ProteinTable from "../ProteinTable/ProteinTable";

const labels = Object.values(OBJECTIVES).map(obj => obj.label);

function ProteinForm() {
  type FormData = {
  objectives: string[];
  minWeight: string;
  maxWeight: string;
  rows: string;
};

const [formData, setFormData] = useState<FormData>({
  objectives: [],
  minWeight: '',
  maxWeight: '',
  rows: ''
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
    [name]: value
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
                type="text"
                name="minWeight"
                value={formData.minWeight}
                onChange={handleChange}
                onBeforeInput={(e) => {
                  if (!/^\d$/.test(e.data)) {
                    e.preventDefault();
                  }
                }}
              />
                
            </label>

            <label className="form-field">
              Poids maximum
              <input
                type="text"
                name="maxWeight"
                value={formData.maxWeight}
                onChange={handleChange}
                onBeforeInput={(e) => {
                  if (!/^\d$/.test(e.data)) {
                    e.preventDefault();
                  }
                }}
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
              type="text"
              name="rows"
              value={formData.rows}
              onChange={handleChange}
              onBeforeInput={(e) => {
                if (!/^\d$/.test(e.data)) {
                  e.preventDefault();
                }
              }}
            />

          </label>
        </div>

      </form>

      {/* Le tableau dépend directement du formulaire */}
      <ProteinTable
        objectives={formData.objectives}
        minWeight={Number(formData.minWeight)}
        maxWeight={Number(formData.maxWeight)}
        rows={Number(formData.rows)}
      />

    </>
  );
}

export default ProteinForm;
