import { useState } from "react";
import Card from "./Card/Card";
import UserInput from "./UserInput/UserInput";
function App() {
  const [selectUsername, setSelectUsername] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleInputChange = (username) => {
    setSelectUsername(username);
    setShowCard(true);
  };
  return (
    <div className="App">
      {!showCard ? (
        <UserInput handleInputChange={handleInputChange}></UserInput>
      ) : (
        <Card username={selectUsername}></Card>
      )}
    </div>
  );
}

export default App;
