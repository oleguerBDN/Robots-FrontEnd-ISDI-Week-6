import Form from "./components/Form";
import Robot from "./components/Robot";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-tr from-gray-800 to-blue-400">
        <h1>Wellcome to RobotLand - Oleguer</h1>
        <Form />
        <div className="md:px-4 md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
          <Robot />
          <Robot />
          <Robot />
          <Robot />
          <Robot />
          <Robot />
        </div>
      </div>
    </>
  );
}

export default App;
