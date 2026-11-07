import { useState } from 'react';

export default function FormularioAuth() {
  // Un interruptor simple: true = Login, false = Sign up
  const [esLogin, setEsLogin] = useState(true);

  return (
    <div className="p-8 max-w-sm mx-auto bg-white rounded-3xl shadow-md space-y-4">
      
      {/* Botones para cambiar el estado */}
      <div className="flex justify-around mb-4">
        <button 
          onClick={() => setEsLogin(true)}
          className={`font-bold ${esLogin ? 'text-teal-600 border-b-2 border-teal-500' : 'text-slate-300'}`}
        >
          Login
        </button>
        <button 
          onClick={() => setEsLogin(false)}
          className={`font-bold ${!esLogin ? 'text-teal-600 border-b-2 border-teal-500' : 'text-slate-300'}`}
        >
          Sign up
        </button>
      </div>

      {/* EL TRUCO: Este input de nombre solo aparece si 'esLogin' es falso */}
      {!esLogin && (
        <div>
          <input
            type="text"
            placeholder="Full Name (Solo en registro)"
            className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
      )}

      {/* Input de contraseña (este siempre se queda fijo) */}
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

    </div>
  );
}