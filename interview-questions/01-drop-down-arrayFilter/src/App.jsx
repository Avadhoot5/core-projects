import './App.css';
import Dropdown from './components/Dropdown';
import SearchCountry from './components/SearchCountry';

function App() {

  const countries = [
    { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai', 'Bangalore'] },
    { name: 'United States', value: 'US', cities: ['New York', 'Los Angeles', 'Chicago'] },
    { name: 'United Kingdom', value: 'UK', cities: ['London', 'Manchester', 'Birmingham'] },
    { name: 'Canada', value: 'CA', cities: ['Toronto', 'Vancouver', 'Montreal'] },
    { name: 'Australia', value: 'AU', cities: ['Sydney', 'Melbourne', 'Brisbane'] },
    { name: 'Germany', value: 'DE', cities: ['Berlin', 'Munich', 'Frankfurt'] },
    { name: 'Japan', value: 'JP', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { name: 'France', value: 'FR', cities: ['Paris', 'Lyon', 'Marseille'] }
    ];

  return (
    <>
      <Dropdown countries = {countries}/>
      <SearchCountry countries = {countries}/>
    </>
  )
}

export default App
