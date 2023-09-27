console.log(location.href);
let url = new URL(location.href);
console.log(url);

console.log(url.searchParams);
url.searchParams.forEach((value, key, parent)=>{
    console.log(`Key: ${key}, Value: ${value}`)
})
console.log(url.searchParams.get('_ijt'));

// fetch('https://dummyjson.com/quotes?limit=0&skip=0')
//     .then(response=>response.json())
//     .then(({quotes})=>{
//
//         let ul = document.getElementById('list');
//
//         for (const quote of quotes) {
//             let li = document.createElement('li');
//             let a = document.createElement('a');
//             a.innerText = `${quote.id} ${quote.author}`;
//             a.href = './quote-details.html?value=' + JSON.stringify(quote);
//             li.appendChild(a);
//             ul.appendChild(li);
//         }
//     })

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'book',
    })
})
    .then(res => res.json())
    .then(console.log);

// Main components of a URL:
// 1. Scheme (Protocol) - indicates the protocol used to access the resource (http or https, ftp, mailto, file, data);
// 2. Domain (or Host) -  indicates name of the server where the resource is located (www.example.com);
// 3. Port (Optional) - the resource is served on a specific port of the server (8080);
// 4. Path - specifies the location and file/directory structure on the server where the resource is located (/path/to/resource)
// 5. Query String (parameters) -  is used to pass data to the server, typically for parameters in the form of key-value pairs (?name=JohnDoe&page=3)
// 6. Fragment Identifier(anchor) - points to a specific section or location within the resource (#section2)
// https://www.example.com:8080/path/to/resource?name=JohnDoe&page=3#section2

// URL object represents a URL and provides properties and methods for working with its various components.
// searchParams - provides methods for adding, modifying, and retrieving query parameters

//HTTP (Hypertext Transfer Protocol) defines a set of methods:
// - GET method is used to retrieve data from the server.
// - POST method is used to transmit data to a server
// - PUT is used to update a resource or create it if it doesn't exist. ( is often used for updating an entire resource.)
// - PATCH is similar to PUT but is used to apply partial modifications to a resource.
// - DELETE is used to remove  resource from the server.

