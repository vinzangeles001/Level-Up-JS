// function Book(title, author, ISBN, numCopies) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies; 
// }

// Book.prototype.getAvailability = function () {
//     if (this.numCopies <= 0) {
//         return "Out of copies";
//     } else if (this.numCopies < 10) {
//         return "Low stock";
//     }
//     return "In stock";
// }

// Book.prototype.sell = function (numCopiesSold = 1) {
//     if (numCopiesSold <= this.numCopies) {
//         this.numCopies -= numCopiesSold;
//     } else {
//         console.log("Not enough copies available to sell.");
//     }
// }

// Book.prototype.restock = function (numCopiesStocked = 5) {
//     this.numCopies += numCopiesStocked;
// }
class Book{

    constructor (title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies; 
    }

    get availability(){
        return this.getAvailability();
    }

    getAvailability(){
        if(this.numCopies === 0){
            return "Out of Stock";
        }
        else if(this.numCopies < 10){
            return "low stock";
        }
        return "in stock";
    }

    sell(numCopiesSold = 1 ){
        this.numCopies -=numCopiesSold;
    }

    restock(numCopiesStocked = 5){
        this.numCopies += numCopiesStocked;
    }
}


const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());

HungerGames.restock(12);
console.log(HungerGames.getAvailability());

HungerGames.sell(17);
console.log(HungerGames.getAvailability());






