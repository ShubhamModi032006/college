import { useEffect, useState } from "react";

const Hook = () => {
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(0); // seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning, timeLeft]);

  const start = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setTimeLeft(parsed);
      setIsRunning(true);
      return;
    }

    if (timeLeft > 0) setIsRunning(true);
  };

  const stop = () => setIsRunning(false);

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setInputValue("");
  };

  const format = (seconds) => {
    const s = seconds % 60;
    const m = Math.floor(seconds / 60);
    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{ maxWidth: 380, margin: 12, fontFamily: "sans-serif" }}>
      <h3>Simple Timer</h3>

      <label style={{ display: "block", marginBottom: 8 }}>
        Enter seconds:
        <input
          type="number"
          min="0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g. 90"
          style={{ marginLeft: 8, padding: 6, width: 120 }}
        />
      </label>

      <div style={{ marginBottom: 12, fontSize: 20 }}>
        <strong>Time:</strong> {format(timeLeft)}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={start} disabled={isRunning && timeLeft > 0}>
          Start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      {timeLeft === 0 && !isRunning && (
        <div style={{ marginTop: 10 }}>Timer stopped / ready.</div>
      )}
    </div>
  );
};

export default Hook;
