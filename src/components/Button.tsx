type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button
      className={`w-fit py-3 px-8 my-8 font-semibold rounded-md hover:rounded-full text-xs md:text-base outline-1 ${
        variant === "primary"
          ? "bg-orange-500 dark:bg-blue-500 text-white border border-orange-500 dark:border-blue-500"
          : variant === "secondary"
          ? "bg-white text-orange-500 dark:text-blue-500"
          : "border border-orange-500 dark:border-blue-500 text-orange-500 dark:text-blue-500"
      }`}>
      {children}
    </button>
  );
};

export default Button;
