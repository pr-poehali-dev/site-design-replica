
import CipherForm from "@/components/CipherForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CipherPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark p-4">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <Button variant="ghost" className="text-primary hover:text-primary/90 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Назад
          </Button>
        </Link>
      </div>
      <CipherForm />
    </div>
  );
};

export default CipherPage;
