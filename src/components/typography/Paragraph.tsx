type ParagraphProps = {
  color?: string;
  children: React.ReactNode;
};

const Paragraph = ({ color = "black", children }: ParagraphProps) => {
  return <p className={`text-sm leading-relaxed text-${color}`}>{children}</p>;
};

export default Paragraph;
