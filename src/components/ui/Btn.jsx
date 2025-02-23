export default function Button({ text }) {
  return (
    <div>
      <button className="hover:bg-emerald-900  px-5 text-2xl border-1 border-gray-400 rounded h-12 hover:text-white" >
        {text}
      </button>
    </div>
  );
}

export const Button1 = ({ children, className, ...props })=>{
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};