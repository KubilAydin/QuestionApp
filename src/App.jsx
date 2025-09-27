import { QUESTIONS } from "./questions";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";

function App() {

  const [started, setStarted] = useState(false); // Test başladı mı?
  const [currentIndex, setCurrentIndex] = useState(0); // Hangi soru aktif?
  const [answers, setAnswers] = useState([]); // Kullanıcı cevapları
  const [timeLeft, setTimeLeft] = useState(30); // Kalan süre (30s)
  const [showOptions, setShowOptions] = useState(false); // Şıklar görünür mü?
  const [finished, setFinished] = useState(false); // Test bitti mi?

  const intervalRef = useRef(null);
  const optionHideTimerRef = useRef(null);
  const autoNextTimerRef = useRef(null);

  useEffect(() => {
    if (!started || finished) return;

    setShowOptions(false);
    optionHideTimerRef.current = setTimeout(() => setShowOptions(true), 4000);

    setTimeLeft(30);
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    autoNextTimerRef.current = setTimeout(() => {
      recordAnswer(null);
    }, 30000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(optionHideTimerRef.current);
      clearTimeout(autoNextTimerRef.current);
    };
  }, [started, currentIndex, finished]);

  useEffect(() => {
    if (timeLeft <= 0) recordAnswer(null);
  }, [timeLeft]);

  function startTest() {
    setStarted(true);
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
  }

  function recordAnswer(selectedOptionId) {
    const q = QUESTIONS[currentIndex];

    if (answers.find((a) => a.questionId === q.id)) return;

    const isCorrect = selectedOptionId === q.correctOptionId;
    const answerObj = {
      questionId: q.id,
      selectedOptionId,
      correct: selectedOptionId ? isCorrect : false,
    };

    setAnswers((prev) => [...prev, answerObj]);

    const nextIndex = currentIndex + 1;
    clearInterval(intervalRef.current);
    clearTimeout(optionHideTimerRef.current);
    clearTimeout(autoNextTimerRef.current);

    if (nextIndex >= QUESTIONS.length) {
      setFinished(true);
      setStarted(false);
    } else {
      setCurrentIndex(nextIndex);
    }
  }
  // Giriş Ekranı
  function renderIntro() {
    return (
      <div className="container mx-auto p-5">
          <h1 className="text-3xl font-bold mb-2 text-center text-white">Teste Hoşgeldiniz</h1>
          <hr className="text-white mt-5"/>
        <div className="flex justify-center items-center flex-col text-center mx-4">
            <p className="mt-3 font-bolt text-xl text-white pt-5">Bu test 10 sorudan oluşmaktadır.</p>
            <p className="mt-3 font-bolt text-xl text-white pt-1">Her soru 30 saniye ekranda kalır.</p>
            <p className="mt-3 font-bolt text-xl text-white pt-1">İlk 4 saniye şıklar gizlidir.</p>
          <button onClick={startTest} className="max-w-lg mt-6 px-6 py-3 bg-[#37353E] hover:bg-black/50 text-white rounded-lg text-xl">Teste Başla</button>
        </div>
      </div>
    );
  }
  // Question Ekranı
  function renderQuestionCard() {
    const currentQuestion = QUESTIONS[currentIndex];
    return (
      <div className="container mx-auto">
        <div className="flex flex-col items-center justifty-center text-white p-5 text-center">
          <h2 className="text-xl font-bold mb-2">Soru {currentIndex + 1} / {QUESTIONS.length}</h2>
          <p className="mb-2 text-md font-semibold">Kalan süre: {timeLeft}s</p>
          <p className="mb-4 text-xl font-bold">{currentQuestion.text}</p>

          {currentQuestion.image && (
            <img src={currentQuestion.image} alt="soru" className="mb-4 w-full max-h-64 object-contain border-t p-5" />
          )}

          {!showOptions ? (
            <p className="italic text-gray-500 text-lg">Şıklar 4 saniye içinde görünecek...</p>
          ) : (
            currentQuestion.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => recordAnswer(opt.id)}
                className="block w-full text-left p-3 mb-2 border rounded bg-[#37353E] hover:bg-black/50"
              >
                {opt.id.toUpperCase()} {opt.text}
              </button>
            ))
          )}
          </div>
      </div>
    );
  }
  // Cevap Ekranı 
  function renderSummary() {
    const correct = answers.filter((a) => a.correct).length;
    const empty = answers.filter((a) => a.selectedOptionId === null).length;
    const wrong = QUESTIONS.length - correct - empty;

    return (
      <div className="container mx-auto p-5">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">Test Sonuçları</h2>
          <hr className="text-white mb-3"/>
        <div className="flex flex-col justifty-center items-center text-center text-white">
          <p className="text-xl font-semibold py-1">Doğru: {correct}</p>
          <p className="text-xl font-semibold py-1">Yanlış: {wrong}</p>
          <p className="text-xl font-semibold py-1">Boş: {empty}</p>
          <button onClick={() => window.location.reload()} className="mt-3 px-6 py-3 bg-[#37353E] hover:bg-black/50 text-white rounded-lg">Tekrar Dene</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen background py-12">
      {!started && !finished && renderIntro()}
      {started && !finished && renderQuestionCard()}
      {finished && renderSummary()}
    </div>
  );
}

export default App;
