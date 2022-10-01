import { useEffect, useState } from "react";
import clsx from "clsx";
import { getRandomColor, getRandomNumber } from "./utils";

const NUMBER_OF_COLORS = 3;

function App() {
  const [colorOptions, setColorOptions] = useState<string[]>([]);
  const [isGuessedRight, setIsGuessedRight] = useState<boolean>();

  const generateColors = () => {
    const colors = Array.from({ length: NUMBER_OF_COLORS }, getRandomColor);

    setColorOptions(colors);
  };

  useEffect(() => generateColors, []);

  const colorToGuess =
    colorOptions[getRandomNumber(0, colorOptions.length - 1)];

  const guessTheColor = (color: string) => {
    const isRight = color === colorToGuess;

    setIsGuessedRight(isRight);

    if (isRight) {
      generateColors();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-sm w-full">
        <h1 className="text-3xl font-semibold text-center mb-4">Guess Color</h1>
        <div
          className="w-full h-52 md:rounded-lg"
          style={{ backgroundColor: colorToGuess }}
          onClick={generateColors}
        />
        <div className="flex items-center justify-center flex-wrap gap-4 mt-4 mx-3">
          {colorOptions.map((option) => (
            <button
              key={option}
              className="text-lg md:text-xl transition-colors duration-200 hover:text-neutral-400"
              onClick={() => guessTheColor(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {typeof isGuessedRight !== "undefined" && (
          <div className="mt-4 w-full p-3 text-center">
            <span
              className={clsx({
                "text-green-500": isGuessedRight,
                "text-red-500": !isGuessedRight,
              })}
            >
              {isGuessedRight ? "You guessed right" : "Nope, wrong one"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
