import { use, useState } from 'react';
import InputCustom from './InputCustom';
import { email } from 'astro:schema';
import { navigate } from 'astro:transitions/client';
export default function FormularioAuth() {
  // Un interruptor simple: true = Login, false = Sign up
  const [esLogin, setEsLogin] = useState(true);
  //Para pasar al siguiente registro
  //Por el momento esto ya no se ocupa
  const [nextData, setNextData] = useState(false);
  //Estado para guardar los valores del formulario
  const [formData, setFormData] = useState({
    email:'',
    password:''
    });

  //para mostrar mensajes de error o éxito en pantalla
  const [mensaje, setMensaje] = useState('');

  //Función para actualizar el estado cada vez que escriban algo
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  //se ejecuta al darle al botón "Ingresar"
  const handleSubmit = async (e) =>{
    e.preventDefault();
      setMensaje("");

      try {
        //aqui hacemos la preticion post a spring boot
        const respuesta = await fetch('http://localhost:8080/api/usuarios/login',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(formData), // Convertimos los datos a JSON
        }
        );

        if(respuesta.ok){
          const usuarioLogueado = await respuesta.json();
          console.log("login existoso, bienvenido ", usuarioLogueado);
          setMensaje('¡Ingreso exitoso! Redirigiendo...');
          // Guardas los datos si los necesitas en la sesión
        localStorage.setItem('usuario', JSON.stringify(usuarioLogueado));
          //mandar a otra vista aqui
          navigate('/inventario');
        }else {
        // Si el backend responde con 401 u otro error
        const errorTexto = await respuesta.text();
        setMensaje(errorTexto || 'Correo o contraseña incorrectos');
      }

      } catch (error) {
        console.error('Error de red al conectar con el backend:', error);
        setMensaje('No se pudo conectar con el servidor.');
      }
   } 

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
       
      </div>


      {/* Esta section es la parte del login */}
      {/* esta parte esta como "true" por defecto  */}

      {esLogin && (
    <section className='p-5'>
    
      {/* Formulario listo para mandar los datos  */}
         <form onSubmit={handleSubmit}>
      <article>
         <InputCustom type="email" name="email" placeholder="Email "value={formData.email} onChange={handleChange} ></InputCustom>
         <InputCustom type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete="off"></InputCustom>
      </article>
        <article className='flex justify-center items-center mt-5 gap-8'>
          <span className='cursor-pointer text-xs text-cyan-700 underline font-bold'>Recuperar Contraseña</span> 
          {/* button para enviar datos*/}
          <button 
          type="submit"
          placeholder="LOGIN"
          className="text-white w-40 py-2 rounded-full bg-cyan-600 cursor-pointer font-bold duration-300 hover:bg-cyan-700"> 
          Ingresar
          </button>

        </article>
         </form>
      </section>

      )}

      {/* ========================================================== */}
     
          {/* Este input de nombre solo aparece si 'esLogin' es falso */}
    {/* Todo este bloque de registro queda desactivado temporalmente */}
      {false && (
        <section className='border-4'>
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

          {nextData && (
            <section>
              <article>
                <input
                  type="text"
                  placeholder="Telefono"
                  className="w-full px-4 py-3 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </article>

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