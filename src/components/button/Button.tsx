const Button = ({ varient, children }) => {
  return (
    <button
      className={`py-3 px-8 my-8 font-semibold rounded-md hover:rounded-full text-xs md:text-base outline-1 ${
        varient === "primary"
          ? "bg-orange-500 dark:bg-blue-500 text-white border border-orange-500 dark:border-blue-500"
          : varient === "secondary"
          ? "bg-white text-orange-500 dark:text-blue-500"
          : "border border-orange-500 dark:border-blue-500 text-orange-500 dark:text-blue-500"
      }`}>
      {children}
    </button>
  );
};

export default Button;
