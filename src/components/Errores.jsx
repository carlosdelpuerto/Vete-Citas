 import React from 'react'
 
 const Errores = (mensaje) => {
   return (
    (
     <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
          <span> Todos los campos son obligatorios</span>
        </div>
      )
   )
 }
 
 export default Errores