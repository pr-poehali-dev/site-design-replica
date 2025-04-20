
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CreateScenarioButton = () => {
  return (
    <Link to="/cipher">
      <Button 
        variant="default" 
        className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 py-2 neon-border transition-all duration-300"
      >
        <PlusCircle className="mr-2 h-5 w-5" />
        Создать новый сценарий
      </Button>
    </Link>
  );
};

export default CreateScenarioButton;
