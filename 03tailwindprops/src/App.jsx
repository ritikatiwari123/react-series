import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "ritika",
    age: 24
  }
  let newArr = [1,2 , 4]

  return (
    <>
      <h1 className="bg-green-400">tailwind test</h1>
      {/* prop name should be same in both component and calling component */}
      <Card user="chai aur code" />
      <Card user="ritika" btText="click me"/>
      

    </>
  );
}

export default App;
