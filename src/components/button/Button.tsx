const Button = ({ varient, children }) => {
  return (
    <button
      className={`py-3 px-8 my-8 font-semibold rounded-md ${
        varient === "primary"
          ? "bg-orange-500 text-white hover:bg-orange-600"
          : varient === "secondary"
          ? "bg-white text-orange-500"
          : "border border-orange-500 text-orange-500 hover:border-transparent"
      }`}>
      {children}
    </button>
  );
};

export default Button;
