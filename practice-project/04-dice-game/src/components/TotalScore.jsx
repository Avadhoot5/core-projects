import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <Score>
        <h1>{score}</h1>
        <p>Total Score</p>
    </Score>
)
}

export default TotalScore;

const Score = styled.div`
    max-width: 100px;
    text-align: center;
    
    h1 {
        font-weight:500;
        font-size: 100px;
        line-height: 100px;

    }
    p {
        font-weight: 24px;
        font-weight:500;
    }

`

