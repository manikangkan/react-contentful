const Paragraph = ({ color, children }) => {
  return <p className={`text-sm leading-relaxed text-${color}`}>{children}</p>;
};

export default Paragraph;
