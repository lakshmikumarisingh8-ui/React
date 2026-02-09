import Header from "./Components/Header";

export default function App() {
  return (
    <>
      <h1>Day 3</h1>
      <Header 
      name="John Doe" age={30} adress="123 Main Street" />
      <Header
      name="Jane Smith" age={25} adress="456 Elm Street" />
    </>
  );
}