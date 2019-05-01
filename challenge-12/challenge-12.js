(function(){/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
 person = {
     name: 'edvanderson',
     lastname: 'Lisboa',
     age: 29
 }


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( 'Propriedades de "person":'+Object.keys(person) );
/*
Crie um array vazio chamado `books`.
*/
var books =[];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name:' Crepusculo',pages:'200'},{name:' Desespero',pages:'200'}
,{name:' Malevola',pages:'200'})

console.log( '\nLista de livros:' );
/*
Mostre no console todos os livros.
*/

console.log( books );

   
    
  


/*
Remova o último livro, e mostre-o no console.
*/
// ?
console.log( '\nLivro que está sendo removido:' );
console.log( books.pop() );



/*
Mostre no console os livros restantes.
*/

    
    console.log( '\nAgora sobraram somente os livros: ' );

    console.log( books  );

/*
Converta os objetos que ficaram em `books` para strings.
*/
var books = JSON.stringify(books)
console.log( '\nLivros em formato string:' );


/*
Mostre os livros nesse formato no console:
*/
console.log(  books  );

/*
Converta os livros novamente para objeto.
*/
 books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:' );
console.log( books );


/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i =0; i<books.length; i++){// for para pecorre o array
    for(var prop in books[i]){// foreach para pecorre o objeto
        console.log(prop+ ' : '+books[i][prop]);
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['e', 'd','v','a','n','d','e','r','s','o','n']
console.log( '\nMeu nome é:' );


/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''))

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myName.reverse();
console.log(myName.join(''));

console.log( '\nAgora em ordem alfabética:' );

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myName.sort();
console.log(myName);
})();