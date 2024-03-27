

let btn=document.querySelector('#button')
let quote=document.querySelector('.quote')
let person=document.querySelector('.person')


const quotes = [{
    quote:`"You have to write the book that wants to be written. And if the book will be too difficult for grown-ups,
    then you write it for children."`,

    person:`Madeleine L'Engle`

},   {   quote:`"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.."`,

        person:`"Stephen King"`
},
            {
                quote:`"Honesty is best policy"`,
                person:"Mahatma gandhi"
},];

            
btn.addEventListener('click',function()
                {
                        let random=Math.floor(Math.random() * quotes.length );

                        quote.innerText=quotes[random].quote;
                        person.innerText=quotes[random].person;
                });