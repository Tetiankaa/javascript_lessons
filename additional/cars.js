const baseURL = 'http://owu.linkpc.net/carsAPI/v1';
const cars = `${baseURL}/cars`;

const urls = {
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}

const carService = {
    getAll: () => fetch(urls.cars.base).then(response => response.json()),
    getById: (id) => fetch(urls.cars.byId(id)).then(response => response.json()),
    create: (car) => fetch(urls.cars.base, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
    }).then(response => response.json()),
    delete: (id) => fetch(urls.cars.byId(id), {method: "DELETE"}),
    update: (id, car) => fetch(urls.cars.byId(id), {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
    }).then(response => response.json())
}
const form = document.getElementById('nameForm');
let brandInput = document.getElementById('brand');
let priceInput = document.getElementById('price');
let yearInput = document.getElementById('year');
let selectedCarId = null;

form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    let brand = brandInput.value;
    let price = +priceInput.value;
    let year = +yearInput.value;
    let car = {brand, price, year};

    if (selectedCarId !==  null){
        await carService.update(selectedCarId,car);
        selectedCarId = null;
    }else {
        await carService.create(car)
    }
    await showAll();
    form.reset();

})
const showAll = async function () {

    const cars = await carService.getAll();
    console.log(cars);

    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerText = "";

    cars.forEach(car => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerHTML = `<b>${car.id} - ${car.brand}:</b> ${car.price}eur - ${car.year} year`;
        let deleteButton = document.createElement('button');
        let updateButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.onclick = async () => {
            await carService.delete(car.id);
            await showAll();
        }
        updateButton.innerText = 'update';
        updateButton.onclick =  ()=>{
           selectedCarId = car.id;
            console.log(selectedCarId);

            brandInput.value = car.brand;
             priceInput.value = car.price;
            yearInput.value = car.year;

        }
        div.append(p, updateButton, deleteButton);
        dataContainer.appendChild(div);
    })

}

void showAll();






