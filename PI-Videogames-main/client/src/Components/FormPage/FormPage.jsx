import { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    imagen: "",
    descripcion: "",
    plataformas: "",
    fechaLanzamiento: "",
    rating: 0,
    generos: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los campos antes de enviar los datos
    if (!validateForm()) {
      return;
    }
    // Enviar los datos del formulario a través de una solicitud HTTP
    //
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor
        console.log(data);
        // Realizar acciones adicionales si es necesario
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error("Error:", error);
      });
  };

  const validateForm = () => {
    // Validar los campos del formulario según las reglas establecidas
    if (formData.nombre.trim() === "") {
      alert("El nombre del videojuego es obligatorio.");
      return false;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(formData.nombre)) {
      alert("El nombre del videojuego no puede contener símbolos.");
      return false;
    }

    if (formData.rating < 0 || formData.rating > 10) {
      alert("El rating debe estar entre 0 y 10.");
      return false;
    }

    // Agregar más validaciones según tus requisitos

    return true; // El formulario es válido, se puede enviar
  };

  const handleGenreChange = (e) => {
    // Manejar los cambios en la selección de géneros
    const selectedGenres = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      generos: selectedGenres,
    }));
  };

  return (
    <div>
      <h1>Formulario de Creación de Videojuego</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        {/* ... */}
        <select multiple onChange={handleGenreChange}>
          {/* Opciones de géneros */}
          {/* ... */}
        </select>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default FormPage;
