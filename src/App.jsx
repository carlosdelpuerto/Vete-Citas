import { useState, useEffect } from "react"
import Fomulario from "./components/Fomulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

//TICO VIO HASTA EL 81

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});


  
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes]);
  
  
  //el "??" significa "Si no hay nada agregá" lo que se le pase despues
  //En el localStorage no puedes guardar arreglos, por eso deben convertir en string para poder almacenarlo
  

  //paciente.id !== id "Pasan todos menos vos", el "(paciente =>)" es una variable temporal para acceder a la propiedad de paciente.id
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacientesActualizados)
  }

  return (
    <div className="cointaier mx-auto mt-20">
    <Header/>
      <div className="mt-12 md:flex">
          <Fomulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />

          <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />

      </div>
    </div>
  )
}

export default App
