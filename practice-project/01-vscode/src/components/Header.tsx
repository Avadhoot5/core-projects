import { SiVisualstudiocode } from "react-icons/si";
import { styled } from "styled-components"
import { TbSun } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Button } from "@mui/material";

function Header() {

  return (
    <HeaderDiv>
        <LogoText>
            <SiVisualstudiocode style={{fontSize: '25'}}/>
            <div>Visual Studio Code</div>
        </LogoText>
        <Midelements>
            <p>Docs</p>
            <p>Updates</p>
            <p>Blog</p>
            <p>API</p>
            <p>Extensions</p>
            <p>FAQ</p>
            <p>Learn</p>
        </Midelements>
        <ThemeSearch>
            <TbSun />
            <CiSearch/>
        <Button variant="contained">Download</Button>
        </ThemeSearch>
    </HeaderDiv>
  )
}


export default Header;

const HeaderDiv = styled.div`
padding: 20px;
margin: 0 auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
gap: 20px;
`

const LogoText = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
font-weight: 800;
cursor: pointer;
`

const Midelements = styled.div`
p {
    color: grey;
    font-weight: bolder;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: black;
    }
}

display: flex;
flex-direction: row;
align-items: center;
gap: 20px;

`

const ThemeSearch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 15px;
font-size: 20px;
cursor: pointer;

`