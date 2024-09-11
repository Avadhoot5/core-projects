import styled from 'styled-components';

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

const Button = styled.button`
    all: unset;
    background: black;
    color: white;
    width: 220px;
    height: 44px;
    border-radius: 5px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid black;
    transition: 0.2s background ease-out;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.2s background ease-in;
    }
`
