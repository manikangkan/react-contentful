type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <h1>
      {props.isLoggedIn
        ? `Welcome ${props.name}🧑🏻‍💻, you've ${props.messageCount} unread messages🤫`
        : `Welcome guest🌸`}
    </h1>
  );
};

export default Greet;
