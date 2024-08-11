import { styled } from "styled-components"
import { Button } from "@mui/material";


function HeroSection() {
  return (
    <div>
        <MainArea>
            <TextArea>
                <RoundedText>
                Free. Built on open source. Runs everywhere.
                </RoundedText>
                <H3Text>
                    <div>Code</div>
                    <div>Editing.</div>
                    <div>Redefined.</div>
                </H3Text>
                <Button style={{width: '50%'}} variant="contained">Download for Windows</Button>
                <LastText>
                    <p>
                    <a href="https://vscode.dev/">Web</a>
                    , <a href="https://vscode.dev/">Insiders edition</a>
                    , or <a href="https://vscode.dev/">other platforms</a>
                    </p>
                    <p>
                    By using VS Code, you agree to its license and privacy statement.
                    </p>
                </LastText>
            </TextArea>
            <Image>
                <img src="https://code.visualstudio.com/assets/home/home-screenshot-mac-2x-v2-light.png" alt="vs-code-lightimage" />
            </Image>
        </MainArea>

    </div>
  )
}


export default HeroSection;

const MainArea = styled.div`
padding: 20px;
margin: 0 auto;
height: 70vh;
display: flex;
flex-direction: row;
gap: 5px;
`

const TextArea = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 35%;

`

const RoundedText = styled.div`
width: 350px;
height: 20px;
align-items: center;
font-weight: 550;
border: 1px solid grey;
border-radius: 20px;
padding: 5px;
text-align: center;

`
const H3Text = styled.div`
font-weight: 900;
font-size: 50px;
display: flex;
flex-direction: column;
line-height: 60px;

`

const LastText = styled.div`

`

const Image = styled.div`
width: 65%;
margin: 0 auto;
padding: 20px;

img {
    height: 100%;
    width: 100%;
}
`
