import { useState } from 'react';
import InputCustom from './InputCustom';
export default function FormularioAuth() {
  // Un interruptor simple: true = Login, false = Sign up
  const [esLogin, setEsLogin] = useState(true);
  //Para pasar al siguiente registro
  const [nextData, setNextData] = useState(false);
  return (
    <section className=" p-10 w-full max-w-md h-90 mx-auto  bg-white rounded-3xl shadow-xl  duration-300">
    
    {/* Botones para cambiar el estado */}
      <div className="flex justify-around mb-4">
        <button 
          onClick={() => setEsLogin(true)}
          className={`font-bold ${esLogin ? 'underline text-cyan-600 text-2xl duration-300 ' : 'text-slate-400 ' }`}
        >
          Ingresar
        </button>
        <button 
          onClick={() => setEsLogin(false)}
          className={`font-bold ${!esLogin ? 'underline text-cyan-600 text-2xl duration-300 ' : 'text-slate-400'}`}
        >
          Registrarse
        </button>
      </div>


      {/* Esta section es la parte del login */}
      {/* esta parte esta como "true" por defecto  */}

      {esLogin && (
    <section className='p-5'>
      <article>
         
         <InputCustom type="email" placeholder="Correo"></InputCustom>

         <InputCustom type="password" placeholder="Contraseña"></InputCustom>
       
      </article>

        <article className='flex justify-center items-center mt-5 gap-8'>
          <span className='cursor-pointer text-xs text-cyan-700 underline font-bold'>Recuperar Contraseña</span> 
          {/* Input para enviar datos*/}
           <input
          type="submit"
          placeholder="LOGIN"
          className="text-white w-40 py-2 rounded-full bg-cyan-600 cursor-pointer font-bold duration-300 hover:bg-cyan-700"
        />
        </article>
      </section>
      )}

      {/**/}
      {/* Este input de nombre solo aparece si 'esLogin' es falso */}
     {!esLogin && (
       <section className='border-4'>
          
          {/* PASO 1 Se muestra solo si 'nextData' es FALSO */}
          {!nextData && (
            <article>
         
         <InputCustom type="text" placeholder="Nombre"></InputCustom>
         <InputCustom type="text" placeholder="Apellido"></InputCustom>
         <InputCustom type="" placeholder="Correo"></InputCustom>
            

              <button 
                onClick={() => setNextData(true)}
                className={`font-bold underline text-cyan-600 text-2xl duration-300 block mx-auto mt-4`}
              >
                Siguiente
              </button>
            </article>
          )}

          {/* PASO 2 Se muestra solo cuando 'nextData' pasa a VERDADERO es decir oculta el paso 1 */}
          {nextData && (
            <section>
            <article>
              <input
                type="text"
                placeholder="Telefono"
                className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </article>

            {/*botones volver y llenar formulario*/}
            <article className='flex justify-center items-center'> 

                <button 
                onClick={() => setNextData(false)}
                className={`font-bold underline text-cyan-600 text-2xl duration-300 block mx-auto mt-4`}
              >
                Volver
              </button>


                <button 
              
                className={`font-bold underline text-cyan-600 text-2xl duration-300 block mx-auto mt-4`}
              >
                Crear Cuenta
              </button>

            </article>
            

            </section>
          )}



        </section>
      )}

      </section>
  );
}