
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

interface CipherData {
  cipherWord: string;
  decryption: string;
}

const Index = () => {
  const [cipherWord, setCipherWord] = useState("");
  const [result, setResult] = useState<CipherData | null>(null);
  const [savedCiphers, setSavedCiphers] = useState<CipherData[]>([]);
  
  useEffect(() => {
    // Загрузка сохраненных шифр-слов из localStorage
    const savedData = localStorage.getItem("cipherData");
    if (savedData) {
      setSavedCiphers(JSON.parse(savedData));
    }
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCipherWord(input);
    
    // Автоматический поиск при вводе
    if (input.trim()) {
      const upperCipherWord = input.toUpperCase();
      
      // Поиск шифр-слова в сохраненных данных
      const foundCipher = savedCiphers.find(cipher => 
        cipher.cipherWord.toUpperCase() === upperCipherWord
      );
      
      if (foundCipher) {
        setResult(foundCipher);
      } else {
        setResult(null);
      }
    } else {
      setResult(null);
    }
  };
  
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
      
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2 text-primary glow-text">Шифр-слова</h1>
        <p className="text-center mb-6 text-gray-300">Введите шифр-слово чтобы узнать подсказку</p>
        
        <div className="neon-border rounded-lg p-6 bg-card/30 border border-primary/50 shadow-[0_0_15px_rgba(248,76,186,0.3)]">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="ВВЕДИТЕ ШИФР-СЛОВО"
              value={cipherWord}
              onChange={handleInputChange}
              className="bg-input/30 text-white border-primary/30 focus:border-primary/70"
            />
            <Button className="bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          {result && (
            <div className="mt-6 p-4 bg-background/40 rounded-md border border-primary/30">
              <h3 className="text-lg font-medium text-primary mb-2">{result.cipherWord}</h3>
              <p className="text-foreground">{result.decryption}</p>
            </div>
          )}
          
          {savedCiphers.length > 0 && !result && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-primary mb-3">Доступные шифр-слова:</h3>
              <div className="space-y-2">
                {savedCiphers.map((cipher, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-background/40 rounded-md border border-primary/30 cursor-pointer hover:bg-background/60 transition-colors"
                    onClick={() => {
                      setCipherWord(cipher.cipherWord);
                      setResult(cipher);
                    }}
                  >
                    <p className="text-primary font-medium">{cipher.cipherWord}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
