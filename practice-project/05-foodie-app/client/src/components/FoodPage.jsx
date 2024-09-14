import styled from "styled-components"

const FoodPage = () => {
  return (
    <div>
        <FoodCardContainer>
             <FoodCards>

             </FoodCards>
        </FoodCardContainer>
    </div>
  )
}

export default FoodPage;

const FoodCardContainer = styled.section`
    height: calc(100vh - 240px);
    background-image: url('./images/background.png');
    background-size: cover;
`

const FoodCards = styled.div`

`