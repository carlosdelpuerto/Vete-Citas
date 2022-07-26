
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {



  //la opcion para iterar en un arreglo en js siempre va ser map, en el crud, al agregar un objeto te va traer ese array modificado y te va mostrar en pantalla.
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} 
            paciente={paciente} 
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Lista vacia</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando a tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} />
          ))}
        </>
      )}
    </div>
  );
};
//cuando vayas a iterar y mostrar diferentes componentes una y otra vez en base a un arreglo (.map) tienes que pasarlo un id unico  dont forget
//A traves de un ternario, agregamos 2 secciones condicionales. "Si está vacia, o si fue agregada" usando fragmentos <></>

export default ListadoPacientes;
