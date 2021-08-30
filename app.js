console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arrSum(numbers) {
    let sum = 0;

    numbers.forEach((number) => (sum += number));
    return sum;
}

console.log(arrSum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = "Harry Potter and the Sorcerer's Stone";
book.author = "J. K. Rowling";
book.pages = "223";
book.readCount = 0;
book.info = function () {
    return `Title: ${this.title} - Author: ${this.author} - Pages: ${this.pages}`;
};

console.log(book.info());
