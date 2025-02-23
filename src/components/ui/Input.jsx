export const Input = ({ className, ...props }) => {
    return (
      <input
        className={` p-2 border border-gray-700 rounded  focus:outline-0 focus:border-emerald-900 focus:border-2 ${className}`}
        {...props}
      />
    );
  };