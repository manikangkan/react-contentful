const Heading = ({ color, children }) => {
  return (
    <h2 className={`text-2xl md:text-4xl my-2 md:my-4 font-semibold leading-relaxed text-${color}`}>
      {children}
    </h2>
  );
};

export default Heading;
