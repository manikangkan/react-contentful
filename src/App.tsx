import { useState } from "react";

const App = () => {
  const [demo, setDemo] = useState(true);
  console.log("app rendered");
  return <div>{demo ? `Hello Manikangkan` : `Welcome Guest`}</div>;
};

export default App;
