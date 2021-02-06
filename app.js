// fetch('https://api.covid19api.com/summary')
//     .then(res => res.json())
//     .then(data => displayCountries(data.Countries));

// const displayCountries = countries => {
//     const countriesDiv = document.getElementById('countries');
//     countries.forEach(countryName => {
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';
//         const countryInfo=`
//   03.  <h1 class="country-name">${countryName.Country}</h1>
//        <h2>${countryName.NewDeaths}</h2>
//        <h3>${countryName.TotalDeaths}</h3>
//        <h4>${countryName.TotalConfirmed}</h4>
//         `
//         countryDiv.innerHTML=countryInfo;
//         countriesDiv.appendChild(countryDiv);
// });


    // for (let i = 0; i < countries.length; i++) {
    //     const countryName = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className='country';
        // const h1 = document.createElement('h1');
        // h1.innerText = countryName.Country;
        // const h3 = document.createElement('h3');
        // h3.innerText = countryName.NewDeaths;
        // const h2 = document.createElement('h2');
      //01.  // h2.innerText = countryName.TotalConfirmed;
        // const p = document.createElement('p');
        // p.innerText = countryName.TotalDeaths;

        // countryDiv.appendChild(h1);
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(h2);
        // countryDiv.appendChild(p);
    //     const countryInfo=`
        //     <h1 class="country-name">${countryName.Country}</h1>
        //    <h2>${countryName.NewDeaths}</h2>
        //    <h3>${countryName.TotalDeaths}</h3>
        //    <h4>${countryName.TotalConfirmed}</h4>
        //  02.   `
        //     countryDiv.innerHTML=countryInfo;
        //     countriesDiv.appendChild(countryDiv);
        // }
    // }

    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => displayCountries(data.Countries));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(countryName => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo=`
    <h1 class="country-name">${countryName.Country}</h1>
       
       <button onClick="displayCountryDetail('${countryName.Country}')">Details</button>
        `
        countryDiv.innerHTML=countryInfo;
        countriesDiv.appendChild(countryDiv);
});}
const displayCountryDetail=countryName =>{
    const url=`https://api.covid19api.com/live/country/${countryName}/status/confirmed`
    //console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>randerCountryInfo(data[0]));

}
const randerCountryInfo=countryName=>{
   // console.log(name);
   const countryDiv=document.getElementById('countryDetail');
   countryDiv.innerHTML=`
   <p>Date:${countryName.Date}</p>
   <h1>Country:${countryName.Country}</h1>
   <h2>Active:${   countryName.Active}</h2>
       <h3>City:${countryName.City}</h3>
       <h4>Deaths:${countryName.Deaths}</h4>
       <h4>Recovered:${countryName.Recovered}</h4>
       <h4>Confirmed:${countryName.Confirmed}</h4>
   `
}