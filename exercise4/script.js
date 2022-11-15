console.log("Hello World, I'm script.js!");
const books = [
 {title: "1984", author: "George Orwell"},
 {title: "In Search of Lost Time", author: "Marcel Proust"},
 {title: "Don Quixote", author: "Miguel de Cervantes"},
 {title: "Moby Dick", author: "Herman Melville"}
]

const result1= books.filter(book => book.author != "George Orwell")
console.log(result1)

const result2= books.filter(book => book.author != "George Orwell" && book.author != "Herman Melville" )
for (i in result1)  
{
  console.log(i)
    console.log('book title: %s, author: %s ', result1[i].title, result1[i].author);
}

for (i in result2)  
{
  console.log(i)
    console.log('book title: %s, author: %s ', result2[i].title, result2[i].author);
}

function myFunction() {
  document.getElementById("content").style.color = "blue";
  }
function updateContent() {
  document.getElementById("content").innerHTML = "Bye-Bye World!";
  }

let p1, p2, p3;


function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Rect(300, 300);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
}