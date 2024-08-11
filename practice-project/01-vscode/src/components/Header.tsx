import { SiVisualstudiocode } from "react-icons/si";
import { styled } from "styled-components"
import { TbSun } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


function Header() {

    const {theme, toggle} = useContext(ThemeContext);

  return (
    <HeaderDiv style={{ background: theme.backGround, color: theme.color }}>
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
            <TbSun onClick={toggle}/>
            <CiSearch/>
        <CustomButton>
            Download
        </CustomButton>
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

export const CustomButton = styled.button`
border-color: ${({theme}) => theme.color == "light"? "black" : "white"};
border-radius: 6px;
padding: 5px 10px;
font-weight: 600;
background: #1a83eb;
width: 60%;
height: 30px;
cursor: pointer;
`