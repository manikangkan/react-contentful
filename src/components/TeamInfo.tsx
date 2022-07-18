import Button from "./button/Button";
import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";

const TeamInfo = () => {
  return (
    <section className="max-w-6xl mx-auto flex space-x-16 pt-16">
      <img
        src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="team info image"
        className="w-1/2 rounded-lg"
      />
      <div>
        <SubHeading>Our team</SubHeading>
        <Heading>A team you can trust</Heading>
        <Paragraph>
          Heroic, ipsum dolor sit amet consectetur adipisicing elit. Ut minus,
          excepturi ea distinctio rerum, repudiandae labore odit repellat nihil
          quia corporis error velit a est! Repellendus error perspiciatis,
          ducimus corrupti, veniam dolorem illum suscipit fuga atque inventore
          cum voluptatum saepe deserunt, blanditiis impedit quam expedita.
          Cumque commodi voluptatem itaque nemo deserunt dolore, totam assumenda
          delectus tempore illum facilis temporibus impedit omnis eligendi nam
          autem! Suscipit earum corporis perspiciatis eos alias tempora
          explicabo molestiae ipsum! Harum sequi error, dolor eveniet culpa
          cumque provident cum unde.
        </Paragraph>
        <Button varient="primary">Learn more</Button>
      </div>
    </section>
  );
};

export default TeamInfo;
