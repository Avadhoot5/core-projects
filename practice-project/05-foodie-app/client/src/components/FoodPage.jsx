import styled from "styled-components";
import { BASE_URL } from "../App";

const FoodPage = ({data:foods}) => {
  return (
    <MainContainer>
        <FoodCardContainer>
             <FoodCards>
              hello
                {foods?.map((food) => (
                  <FoodCard key={food.name}>
                    <div className="foodImage">
                      {/* <img src={BASE_URL+food.image} alt="food image" /> */}
                    </div>
                  </FoodCard>
                ))}
             </FoodCards>
        </FoodCardContainer>
    </MainContainer>
  )
}

export default FoodPage;

const MainContainer = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const FoodCardContainer = styled.section`
    height: calc(100vh - 260px);
    background-image: url('./images/background.png');
    background-size: cover;
    /* background-repeat: no-repeat; */
    opacity: 0.15; /* Increased opacity for better visibility */
    z-index: 10;
`;

const FoodCards = styled.div``;

const FoodCard = styled.div``;
