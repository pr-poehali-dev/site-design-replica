
import CreateScenarioButton from "@/components/CreateScenarioButton";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark">
      <div className="absolute top-4 right-4">
        <CreateScenarioButton />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary glow-text">Шифр-сценарии</h1>
        <p className="text-xl text-gray-300">Создайте новый сценарий с шифр-словами</p>
      </div>
    </div>
  );
};

export default Index;
