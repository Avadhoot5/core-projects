create a basic drop down.
below is the countries array 

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

1.) create a 1st drop-down where user can select one country, and after that the user should see respective cities in the 2nd drop-down menu.

2.) below that create an element. 
    search input box - user can search for any country.
    render the searched country from the array and display it.
