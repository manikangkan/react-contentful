const Button = ({ varient, children }) => {
  return (
    <button
      className={`py-3 px-8 my-8 font-semibold text-white rounded-md ${
        varient === "primary"
          ? "bg-orange-500 hover:bg-orange-600"
          : varient === "secondary"
          ? "bg-white text-orange-500"
          : "border-2 border-white hover:bg-white/10"
      }`}>
      {children}
    </button>
  );
};

export default Button;
