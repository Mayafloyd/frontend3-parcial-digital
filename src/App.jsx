import { useState } from "react";
import Card from "./Card";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({ name: "", lastname: "" });
  const [items, setItems] = useState([]);

  console.log("items", items);
  const fullNames = [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //Aqui deberias agregar los estados y los handlers para los inputs

  const handleAddItem = (e) => {
    e.preventDefault();
    if (formData.name && formData.lastname) {
      const newItem = { ...formData };
      setItems([...items, newItem]);
      setFormData({ name: "", lastname: "" });
    }
  };

  return (
    <div className="App">
      <h1>Tu gato según tu nombre </h1>
      <p>Creado por Sara Acevedo Maya {"<3"}</p>
      <form onSubmit={handleAddItem}>
        <div className="formClass">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <button type="submit">Agregar</button>
        </div>
      </form>
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
