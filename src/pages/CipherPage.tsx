
import CipherForm from "@/components/CipherForm";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CipherPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark p-4">
      <div className="absolute top-4 right-4">
        <Link to="/create">
          <Button 
            variant="ghost" 
            className="bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary/90 rounded-full px-4 py-2 shadow-[0_0_15px_rgba(248,76,186,0.5)] hover:shadow-[0_0_20px_rgba(248,76,186,0.7)] transition-all"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Создать новый сценарий
          </Button>
        </Link>
      </div>
      <CipherForm />
    </div>
  );
};

export default CipherPage;
