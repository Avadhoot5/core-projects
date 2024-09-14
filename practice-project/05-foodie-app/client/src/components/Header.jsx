import styled from "styled-components"

const Header = () => {

    const buttonArray = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  return (
    <div>
        <MainContainer>
            <LogoSearchContainer>
                <div>
                    <img className="logo" src="../images/logo.svg" alt="foodielogo" />
                </div>
                <div className="searchInput">
                    <input type="text" placeholder="Search Food..." 
                    name='search'/>
                </div>
            </LogoSearchContainer>
            <FilterButtons>
                {buttonArray.map((value, index) => (
                    (<Button key={index}>{value}</Button>)
                ))}
            </FilterButtons>
        </MainContainer>
    </div>
  )
}

export default Header;


const MainContainer = styled.div`
    max-width: 1200px;
    max-height: 240px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 20px;    
`

const LogoSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 100px;

    .searchInput {
        width: 280px;
        height: 40px;
        font-weight: 500; 
        input {
            background-color: transparent;
            padding: 5px 10px;
            border: 1px solid red;
            border-radius: 5px;
            color: white;
            font-weight: 500;
        }
    }

`

const FilterButtons = styled.div`
    display: flex;
    gap: 14px;
    justify-content: center;
    padding-top: 50px;
    
    `

const Button = styled.button`
    color: white;
    background: #FF4343;
    height: 30px;
    width: auto;
    padding: 3px 8px;
    border: none;
    border-radius: 5px;

`