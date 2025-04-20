
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const CipherPage = () => {
  const [cipherWord, setCipherWord] = useState("");
  const [decryption, setDecryption] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!cipherWord || !decryption) {
      return;
    }

    // Получаем существующие данные
    const existingData = localStorage.getItem("cipherData");
    let cipherData = existingData ? JSON.parse(existingData) : [];

    // Добавляем новое шифр-слово
    cipherData.push({
      cipherWord: cipherWord,
      decryption: decryption
    });

    // Сохраняем в localStorage
    localStorage.setItem("cipherData", JSON.stringify(cipherData));

    // Переходим на главную
    navigate("/");
  };

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

      <div className="w-full max-w-md">
        <div className="neon-border rounded-lg p-6 bg-card/30 border border-primary/50 shadow-[0_0_15px_rgba(248,76,186,0.3)]">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">Создание нового сценария</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="cipher-word" className="text-gray-200">Шифр-слово</label>
              <Input
                id="cipher-word"
                placeholder="Введите секретное шифр-слово"
                value={cipherWord}
                onChange={(e) => setCipherWord(e.target.value)}
                className="bg-input/30 text-white border-primary/30 focus:border-primary/70"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="decryption" className="text-gray-200">Результат</label>
              <Textarea
                id="decryption"
                placeholder="Что должно отобразиться при вводе шифр-слова"
                value={decryption}
                onChange={(e) => setDecryption(e.target.value)}
                className="min-h-[120px] bg-input/30 text-white border-primary/30 focus:border-primary/70"
              />
            </div>
            
            <Button 
              onClick={handleSave}
              className="w-full bg-primary hover:bg-primary/90 mt-4 shadow-[0_0_15px_rgba(248,76,186,0.3)] hover:shadow-[0_0_20px_rgba(248,76,186,0.5)]"
              disabled={!cipherWord || !decryption}
            >
              <Save className="mr-2 h-5 w-5" />
              Сохранить сценарий
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CipherPage;
