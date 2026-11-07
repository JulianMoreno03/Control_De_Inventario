import { useState } from 'react';

export default function FormularioAuth() {
  // Un interruptor simple: true = Login, false = Sign up
  const [esLogin, setEsLogin] = useState(true);

  return (
    <section className=" p-10 w-full max-w-md mx-auto  bg-white rounded-3xl shadow-md ">
    
    {/* Botones para cambiar el estado */}
      <div className="flex justify-around mb-4">
        <button 
          onClick={() => setEsLogin(true)}
          className={`font-bold ${esLogin ? 'text-teal-600 text-2xl order-b-2 border-teal-500' : 'text-slate-300'}`}
        >
          Login
        </button>
        <button 
          onClick={() => setEsLogin(false)}
          className={`font-bold ${!esLogin ? 'text-teal-600 text-2xl border-b-2 border-teal-500' : 'text-slate-300'}`}
        >
          Sign up
        </button>
      </div>


      {/* Esta section es la parte del login */}
      {/* esta parte esta como "true" por defecto  */}
      {esLogin && (
    <section className='p-5'>
      <article>
         <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-10 shadow-md rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 shadow-md rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </article>

        <article className='flex justify-center items-center mt-5 gap-8'>
          <h3 className='cursor-pointer text-xs text-teal-900 underline font-bold'>Recuperar Contraseña</h3> 
           <input
          type="submit"
          placeholder="LOGIN"
          className="text-white w-40  py-2  rounded-full bg-cyan-600 cursor-pointer font-bold"
        />
        </article>
      </section>
      )}


      {/* Este input de nombre solo aparece si 'esLogin' es falso */}
      {!esLogin && (
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
      )}



      </section>
  );
}