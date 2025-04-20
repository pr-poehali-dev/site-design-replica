
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface CipherResult {
  cipherWord: string;
  decryption: string;
}

// Вымышленная база данных шифр-слов
const cipherDatabase: Record<string, string> = {
  "ТАЙНА": "В старом доме на холме",
  "КЛЮЧ": "Под третьей ступенькой крыльца",
  "ЗВЕЗДА": "Встреча в полночь у маяка",
  "ФЕНИКС": "Возрождение из пепла начнется в полдень",
  "МИРАЖ": "Истина скрывается в зеркальном отражении"
};

const CipherForm = () => {
  const [cipherWord, setCipherWord] = useState("");
  const [result, setResult] = useState<CipherResult | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const upperCipherWord = cipherWord.toUpperCase();
    const decryption = cipherDatabase[upperCipherWord] || "Расшифровка не найдена";
    
    setResult({
      cipherWord: upperCipherWord,
      decryption
    });
  };
  
  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold text-center mb-2 text-primary glow-text">Шифр-слова</h1>
      <p className="text-center mb-6 text-gray-300">Введите шифр-слово чтобы узнать подсказку</p>
      
      <div className="neon-border rounded-lg p-6 bg-card">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            placeholder="ВВЕДИТЕ ШИФР-СЛОВО"
            value={cipherWord}
            onChange={(e) => setCipherWord(e.target.value)}
            className="bg-input text-white border-primary/50"
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            <Search className="h-5 w-5" />
          </Button>
        </form>
        
        {result && (
          <div className="mt-6 p-4 bg-background rounded-md border border-primary/30">
            <h3 className="text-lg font-medium text-primary mb-2">{result.cipherWord}</h3>
            <p className="text-foreground">{result.decryption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CipherForm;
