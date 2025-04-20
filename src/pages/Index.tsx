
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Назад
          </Button>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary glow-text">Шифр-сценарии</h1>
        <p className="text-xl text-gray-300">Создайте новый сценарий с шифр-словами</p>
      </div>
    </div>
  );
};

export default Index;
