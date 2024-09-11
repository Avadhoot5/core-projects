import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelector from './NumberSelector';

const GamePlay = () => {
  return (
    <MainContainer>
        <TotalScore/>
        <NumberSelector/>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    padding-top: 70px;
    justify-content: space-between;

`