import styled from "styled-components";

const RollDice = ({rollDice,currentDice}) => {

  return (
    <DiceMain>
        <DiceImage>
            <img className="dice" 
            onClick={rollDice}
            src={`./images/dice/dice_${currentDice}.png`} alt="dice images" />
        </DiceImage>
        <p>Click on Dice to roll</p>
    </DiceMain>
  )
}

export default RollDice;

const DiceMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    p {
        font-size: 24px;
        font-weight: 400;
    }
`

const DiceImage = styled.div`
    .dice {
        width: 250px;
        height: 250px;
        cursor: pointer;
    }
    
`


