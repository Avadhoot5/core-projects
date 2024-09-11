import styled from 'styled-components';
import {Button} from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <div>
        <Container>
            <div>
                <img className='diceImage' src="./images/dices.png" alt="dices image" />
            </div>
            <TitleButton>
                <Title>dice game</Title>
                <Button onClick={toggle}>Play Now</Button>
            </TitleButton>
        </Container>
    </div>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    margin-top: 120px;
    height: 500px;
    padding: 5px;
    display: flex;
    gap: 5px;
    align-items: center;

    .diceImage {
    height: 500px;
    width: 600px;
    padding: 20px;
    }
`
const TitleButton = styled.div`
    max-width: 540px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Title = styled.div`
    font-size: 90px;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: bold;
`

