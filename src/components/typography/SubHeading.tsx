const SubHeading = ({ color, children }) => {
  return (
    <h2
      className={`md:text-xl font-semibold my-2  md:my-4 leading-relaxed text-${color}`}>
      {children}
    </h2>
  );
};

export default SubHeading;
