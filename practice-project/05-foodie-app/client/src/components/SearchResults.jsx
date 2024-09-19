import styled from "styled-components";
import { BASE_URL } from "../App";
import { Button } from "../App";

function SearchResults({data}) {
  return (
    <div>
    <FoodCardContainer>
        <FoodCards>
            {data?.map(({name, image, text, price}) => (
                <FoodCard key = {name}>
                    <div className="food_image">
                        <img src={BASE_URL + image} alt="food image" />
                    </div>
                    <div className="food_info">
                        <div className="info">
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                        <Button>${price.toFixed(2)}</Button>
                    </div>
                </FoodCard>
            ))}
        </FoodCards>
    </FoodCardContainer>

    </div>
  )
}

export default SearchResults;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  position: relative;
  /* overflow: hidden; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../images/background.png");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.15;
    z-index: 1;
  }
`;

const FoodCards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 32px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 10px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    
    h3 {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
    }
    p {
        margin-top: 4px;
        font-size: 14px;
    }
    button {
        font-size: 12px;
    }
  }

`;