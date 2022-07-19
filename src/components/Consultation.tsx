import Button from "./button/Button";
import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";

const Consultation = () => {
  return (
    <section className="bg-orange-500 flex flex-col items-center justify-center py-8 lg:py-16 px-4 xl:px-0 text-center">
      <Heading color="white">Speak to a Career Expert</Heading>
      <Paragraph color="white">
        We have are dedicated to finding the best fit for you. Get in touch to
        organise a face-to-face cactch up with somone from our team
      </Paragraph>
      <Button varient="secondary">Get in touch</Button>
    </section>
  );
};

export default Consultation;
