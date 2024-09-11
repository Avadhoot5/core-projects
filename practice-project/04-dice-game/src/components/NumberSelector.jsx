import styled from "styled-components"

const NumberSelector = ({handleNumber, selectedNum, error}) => {

  const arrayNum = Array.from({length: 6}, (_,i) => i+1);

  return (
    <NumberContainer>
      {error && <div className="error">{error}</div>}
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
  cursor: pointer;
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
  .error {
    color: red;
    font-size: 24px;
    font-weight: 400;
  }

`