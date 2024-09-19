import { useEffect, useState } from 'react';
import './App.css'
import styled from 'styled-components'
import SearchResults from './components/SearchResults';

export const BASE_URL = 'http://localhost:9000';

function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState('all');

  const filterBttn = [
    {
      name: "All",
      type: "all"
    },
    { name: "Breakfast",
      type: "Breakfast"
    },
    { name: "Lunch",
      type: "Lunch"
    },
    { name: "Dinner",
      type: "Dinner"
    }
  ]

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
  
        setData(data);
        setFilteredData(data);
        setLoading(false);
      } catch(e) {
        error("data not found");
      }
    }
  
    fetchFoodData();

  }, [])

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);
  }

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn('all');
      return;
    }
    const filter = data.filter(food => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSelectedBtn(type);
  }


  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;    


  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div onChange={searchFood} className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBttn.map((value) => (
          <Button isSelected={selectedBtn === value.type} key={value.name}
           onClick={() => filterFood(value.type)}>{value.name}</Button>
        ))}
      </FilterContainer>
    </Container>
    <SearchResults data = {filteredData}/>

    </>
  )
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

`

const TopContainer = styled.section`
  min-height: 140px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search input::placeholder {
    color: white;
    font-weight: 700;
  }

  .search input {
    background-color:transparent;
    font-size: 16px;
    border: 1px solid red;
    border-radius: 5px;
    padding: 0 10px;
    width: 200px;
    height: 40px;
    &::placeholder {
      color: white;
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 100px;
  }

`

const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  padding-bottom: 40px;
`

export const Button = styled.button`
  background-color: ${({isSelected}) => isSelected ? "#ff0303" : "#FF4343"};
  outline: 1px solid ${({isSelected}) => isSelected ? "white" : "black"};
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ff0303;
  }

`