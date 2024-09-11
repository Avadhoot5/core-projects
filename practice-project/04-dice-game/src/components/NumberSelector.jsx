import styled from "styled-components"
import { useState } from "react";

const NumberSelector = () => {

  const arrayNum = Array.from({length: 6}, (_,i) => i+1);
  
  const [selectedNum, setSelectedNum] = useState();

  const handleNumber = (index) => {
    setSelectedNum(index);
  }

  return (
    <NumberContainer>
      <NumberBox>
        {arrayNum.map((value,i) => {
          return (<Box isSelected = {value === selectedNum} 
            key={i} onClick={() => handleNumber(value)}>{value}</Box>)
        })}
      </NumberBox>
      <p>Select Number</p>
    </NumberContainer>
  )
}

export default NumberSelector

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({isSelected}) => isSelected ? 'black':'white'};
  color: ${({isSelected}) => isSelected ? 'white':'black'}
`

const NumberBox = styled.div`
  display: flex;
  gap: 24px;
`

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 20px;

  p {
    font-size: 24px;
    font-weight: bold;

  }
`