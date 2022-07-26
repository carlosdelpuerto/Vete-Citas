import { useState, useEffect } from "react";
import Errores from "./Errores";

const Fomulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  //comprobacion si hay algo en el objeto  ".length > 0" entonces modificamos el efecto secundario del estado gracias al SET.
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);

  //Generador de KEY para una ID uniendo un mathrandom con un datenow, la cual debe se debe pasar por key={paciente.id}
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay campos vacios");
      setError(true);
      return;
    }
    setError(false);

    //objeto de Pacientes
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas 
    };

   
    //Logica de los pacientes actualizados: Cuando le doy en editar, estamos creando un objeto en memoria diferente un segundo que se llama "paciente", entonces este .map itera sobre el pacienteState o sea "La lista", crea la variable temporal llamada pacienteState. cuando identifica que es igual al paciente que esta en la parte de "Seguimiento Pacientes" entonces retorna el (objetoPaciente nuevo), que es el que está en el formulario. No el que está en el DOM. y si no retorna el pacienteState porque si no tuviera el 2do return, eliminaria los demas registros y solamente retornaria el que estamos editando.
    if (paciente.id) {

      objetoPaciente.id = paciente.id
      
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({});
       
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
      //Nuevo registro, no tiene un id entonces lo generas con la funcion "generarId()" y despues le agregas a setPaciente
    }

    //Reiniciar el formulario despues de agregar
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
    //el formulario se reinicia al llamar a su estado inicial porque todo el formulario esta asociado al "value" del input
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Errores>
            <p> Todos los campos son obligatorios</p>
          </Errores>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //evento de react
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Fomulario;
