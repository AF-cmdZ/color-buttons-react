import Button from "./components/Button";

const buttons = [
  {
    color: "bg-red-500",
    textColor: "text-white",
  },
  {
    color: "bg-green-500",
    textColor: "text-white",
  },
  {
    color: "bg-blue-500",
    textColor: "text-white",
  },
  {
    color: "bg-yellow-500",
  },
];

function App() {
  const renderButtons = () =>
    buttons.map(({ color, textColor }, index) => (
      <Button key={index} btnColor={color} textColor={textColor} />
    ));

  return <main className="flex justify-center gap-4">{renderButtons()}</main>;
}

export default App;

