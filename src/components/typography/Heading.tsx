const Heading = ({ color, children }) => {
  return (
    <h2 className={`text-4xl font-semibold leading-relaxed text-${color}`}>
      {children}
    </h2>
  );
};

export default Heading;
