let getResidentsBtn = document.querySelector('button')

function btnClick() {
    console.log('Button clicked');
    axios.get('https://swapi.dev/api/planets?search=Alderaan')
    .then((response) => {
        console.log(response.data.results)
        let residents = response.data.results[0].residents
        for(i=0; i< residents.length; i++){
            axios.get(residents[i])
            .then((response) => {
                console.log(response.data)
                let h2 = document.createElement('h2')
                h2.textContent = response.data.name
                document.querySelector('body').appendChild(h2)
                let createClass = document.querySelector('h2')
                createClass.classList.add('name') 
                console.log(createClass.classList)
            })
        }
    }) 
}



getResidentsBtn.addEventListener('click',btnClick)