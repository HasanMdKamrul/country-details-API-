// ** Bring the data here

const fetchData = async () => {
    try{
        const response = await fetch('https://restcountries.com/v3.1/all');
        response.ok ? console.log('Response Successfull') : console.log('Response unsuccessful');
        const data = await response.json();
        contentLoad(data);
        buttonHandler(data)
       
        // console.log(data)
    } catch(eroor){
        console.log(eroor.message);
    }
};

fetchData();

const contentLoad = (data)=>{

    // console.log(data);

    const container = document.getElementById('content');

    data.forEach( country => {
        // console.log(country.cca2)
        const div = document.createElement('div');
        div.classList.add("col-lg-3")
        div.innerHTML = `
            <div class="card text-bg-dark mb-3 shadow-lg" >
              <div class="card-header text-primary">Country Name:<span class="text-warning">${country.name.common}</span></div>
              <div class="card-body">
                <h5 class="card-title text-success">Capital:<span class="text-info">${country.capital}</span> </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
               
                <button id=${country.cca2} class="btn btn-primary"">Flags</button>
              </div>
            </div>
        
        `

        container.appendChild(div);
    })
}


const buttonHandler = (data)=>{
  const flagShow = document.getElementById('flag-show');
  data.forEach(country => {
    const allButtons = document.querySelectorAll(`#${country.cca2}`);
    for (const button of allButtons) {
      button.addEventListener('click', () => {
        flagShow.innerHTML = `

        <img src="${country.flags.png}">
        
        `
      })
    }
  })
}
