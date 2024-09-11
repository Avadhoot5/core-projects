import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <Heading>How to play dice game</Heading>
      <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
    </RulesContainer>
  );
};

export default Rules;

const Heading = styled.h2`
    font-size: 24px;
    font-weight: bold;

`;

const RulesContainer = styled.div`
  background: #fbf1f1;
  height: 200px;
  width: 790px;
  padding: 20px;
`;
