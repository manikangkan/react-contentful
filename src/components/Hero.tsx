import Title from "./typography/Title";
import SubTitle from "./typography/SubTItle";
import Button from "./button/Button";

const Hero = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-center bg-no-repeat bg-cover py-64 px-4 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <Title>Kickass software dev</Title>
        <Button varient="primary">Explore</Button>
      </div>
    </section>
  );
};

export default Hero;
