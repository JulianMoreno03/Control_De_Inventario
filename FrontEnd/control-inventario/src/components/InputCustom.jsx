

//Componente de los inputs 
export default function InputCustom({ type, placeholder, value, onChange, name,autoComplete }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      className="w-full px-4 py-3 mb-5 shadow-md rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"

    />
  );
}