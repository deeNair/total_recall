////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <=20; i ++) {
    //console.log(i);
}


////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++) {
    if (i % 2 == 0) {
        //console.log(i+ "<-- is an even number");
    };

}


////////////////////////////////
// Fizz Buzz
////////////////////////////////

for(let i=0;i<=100;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
        console.log("FizzBuzz");
       
        
    }

    else if(i%5 == 0){
        console.log(i);
        console.log("Buzz");
    }

    else if(i%3 == 0){
        console.log(i);
        console.log("Fizz");
     }

   
} 

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.
wolfy[2]=17;
console.log(wolfy[2]);

wolfy[3]="Gotham City"
console.log(wolfy[3]);
dart.push("Hawkins");
wolfy.splice(0,1,"Gameboy");
console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninja=["Donatello","Leonardo","Raphael", "Michaelangelo"];
for(let i=0;i<ninja.length;i++){
    ninja[i]=ninja[i].toUpperCase();
    console.log(ninja[i]);
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);

favMovies.sort();
console.log(favMovies);//sorts by albhetical order

favMovies.pop();
console.log(favMovies);

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

favMovies.reverse();
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

favMovies.unshift();
console.log(favMovies);

const idx=favMovies.indexOf("Django Unchained");
console.log(idx);

favMovies.splice(idx,1,"Avatar")
console.log(favMovies);

const len=Math.ceil(favMovies.length/2);
console.log(favMovies.length);
console.log(len);

let mov1=favMovies.slice(len,favMovies.length);

console.log(mov1);
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));//slice method is immutable

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
    
    console.log(whereIsWaldo);
    whereIsWaldo.splice(1,1);
    console.log(whereIsWaldo);
    whereIsWaldo[1][2]="No one";

console.log(whereIsWaldo);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
let kittyTalk=["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."];

let kittyRandom=kittyTalk[Math.floor(Math.random()*kittyTalk.length)];

console.log(kittyRandom);

for(let i=0;i<20;i++){
    let kittyRandom=kittyTalk[Math.floor(Math.random()*kittyTalk.length)];
if (i%2 == 0){
    console.log(kittyRandom);
}
else{
    console.log("Love me, pet me! HSSSSSS!");
}

}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
const median=Math.ceil(nums.length/2);
console.log(median);
console.log(nums[median]);
