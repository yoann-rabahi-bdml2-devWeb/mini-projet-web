import './ProteinForm.css';
import { OBJECTIVES } from '../../data/Objectives';
import React, { useState } from 'react';

const labels = Object.values(OBJECTIVES).map(obj => obj.label);

function ProteinForm() {
  const [formData, setFormData] = useState({
    objectives: labels,
    minWeight: 0,
    maxWeight: 0,
    rows: 0
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form className="protein-form">

      {/* Groupe de checkbox */}
      <div className="checkbox-group">
        Selectionnez un ou plusieurs objectifs : 
        {labels.map((label) => (
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

      {/* Poids minimum */}
      <label className="form-field">
        Poids minimum :
        <input
          type="number"
          name="minWeight"
          value={formData.minWeight}
          onChange={handleChange}
        />
      </label>

      {/* Poids maximum */}
      <label className="form-field">
        Poids maximum :
        <input
          type="number"
          name="maxWeight"
          value={formData.maxWeight}
          onChange={handleChange}
        />
      </label>

      {/* Nombre de lignes */}
      <label className="form-field">
        Nombre de lignes :
        <input
          type="number"
          name="rows"
          value={formData.rows}
          onChange={handleChange}
        />
      </label>

    </form>
  );
}

export default ProteinForm;
