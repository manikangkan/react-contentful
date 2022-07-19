const SubHeading = ({ color, children }) => {
  return (
    <h2 className={`text-xl font-semibold leading-relaxed text-${color}`}>
      {children}
    </h2>
  );
};

export default SubHeading;
