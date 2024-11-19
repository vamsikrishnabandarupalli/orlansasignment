import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });
  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = () => {
    const { name, age, file } = formData;
    alert(`Name: ${name} \nAge: ${age} \nFile: ${file?.name || "No file selected"}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Healthcare Dashboard</h2>

        <div style={styles.field}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleInputChange("name")} style={styles.input}/>
        </div>

        <div style={styles.field}>
          <label htmlFor="age" style={styles.label}>Age</label>
          <select id="age" value={formData.age} onChange={handleInputChange("age")} style={styles.input}>
            <option value="">Select Age</option>
            {ageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.field}>
          <label htmlFor="file" style={styles.label}>Upload File</label>
          <input type="file" id="file" onChange={handleFileChange} style={styles.input}
          />
        </div>
        {formData.file && (
          <p style={styles.fileInfo}>
            Selected File: {formData.file.name}
          </p>
        )}
        <button onClick={handleSubmit} style={styles.button}>Submit</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#e3f2fd", // Light blue background
    margin: 0,
  },
  card: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    margin: "0 0 20px",
    color: "#333",
  },
  field: {
    marginBottom: 15,
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 8,
    fontSize: 14,
    border: "1px solid #ccc",
    borderRadius: 4,
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    color: "#ffffff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    marginTop: 10,
  },
  fileInfo: {
    margin: "10px 0",
    fontSize: 14,
    color: "#555",
  },
};

export default App;
