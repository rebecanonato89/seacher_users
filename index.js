const users = document.querySelector('.users');

url = 'https://randomuser.me/api/?seed=javascript&results=10&nat=BR&noinfo';

async function fazOQueTemQueFazer() {
    try {
        const data = await fetch(url).then((resp) => resp.json());
        let authors = data.results;

        //Colocando na tela
        authors.forEach(x => {
            const html = `
                    <img src="${x.picture.thumbnail}" class="card-img-top br0" alt="...">
                    <div class="texts">
                        <strong>${x.name.title} ${x.name.first} ${x.name.last}</strong>
                        <p>Idade: ${x.dob.age}</p>
                        <p>Sexo: ${x.gender}</p>
                    </div>
                    `;
            const div = document.createElement('li');
            div.innerHTML = html;
            users.appendChild(div);
        });

        localStorage.setItem('chave', JSON.stringify(authors));
        console.log("Authors: ", authors);
        console.log("Authors: ", JSON.stringify(authors));

    } catch (error) {
        console.log(error);
    }
}

fazOQueTemQueFazer();






//const cards = document.querySelector('.card');
// url = 'https://randomuser.me/api/?seed=javascript&results=1&nat=BR&noinfo';
// fetch(url) // método global que fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
//     .then((resp) => resp.json()) //retorna uma promessa contendo a resposta (um Responseobjeto).
//     .then((data) => { //Os dados JSON aqui serão processados. 
//         let authors = data.results; // data.results contem o array de objetos retornado pela API
//         const html = `
//                         <p>${authors[0].name.first}</p> 
//                     `; // pegamos aqui a única opção que está sendo retornada - posição do array 0
//         const div = document.createElement('li');
//         div.innerHTML = html;
//         return cards.appendChild(div);
//     }).catch(function(error) { // caso a API retorne erro, capturamos com o catch
//         console.log(error);
//     });


// fetch(url)
//     .then((resp) => resp.json())
//     .then(function(data) {
//         authors = data.results;
//         calculos(authors);
//         return authors.forEach(x => {
//             const html = `
//                 <img src="${x.picture.thumbnail}" class="card-img-top br0" alt="...">
//                 <div class="texts">
//                     <strong>${x.name.title} ${x.name.first} ${x.name.last}</strong>
//                     <p>Idade: ${x.dob.age}</p>
//                     <p>Sexo: ${x.gender}</p>
//                 </div>
//             `;
//             const div = document.createElement('li');
//             div.innerHTML = html;

//             users.appendChild(div);
//         });
//     }).catch(function(error) {
//         console.log(error);
//     });

// function calculos(authors) {
//     console.log("Authors: ", authors);
// }