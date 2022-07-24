type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-4xl md:text-6xl font-semibold text-white leading-relaxed">
      {children}
    </h1>
  );
};

export default Title;
