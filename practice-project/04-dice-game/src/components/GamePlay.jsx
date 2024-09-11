import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNum, setSelectedNum] = useState();
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const handleNumber = (index) => {
    setSelectedNum(index);
    setError("");
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return;
    }

    setError("");

    const randomNum = randomNumber(1, 7);
    // setting the random number as the current dice value.
    setCurrentDice(randomNum);

    if (selectedNum === randomNum) {
      setError(false);
      setScore((prev) => prev + selectedNum);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
  };

  const handleResetScore = () => {
    setScore(0);
  };

  const handleShowRules = () => {
    setRules((prev) => !prev);
  };

  return (
    <div>
      <ScoreContainer>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          handleNumber={handleNumber}
          selectedNum={selectedNum}
        />
      </ScoreContainer>
      <RollDiceContainer>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="Bttns">
          <Button onClick={handleResetScore} className="resetBttn">
            Reset Score
          </Button>
          <Button onClick={handleShowRules}>Show Rules</Button>
        </div>
          <div>{rules && <Rules />}</div>
      </RollDiceContainer>
    </div>
  );
};

export default GamePlay;

const ScoreContainer = styled.div`
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  padding-top: 70px;
  justify-content: space-between;
`;

const RollDiceContainer = styled.div`
  margin-top: 48px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  .Bttns {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .resetBttn {
    background: white;
    color: black;
    transition: 0.2s background ease-out;
    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
      transition: 0.2s background ease-in;
    }
  }
`;
