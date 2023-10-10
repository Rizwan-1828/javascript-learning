const marvel_heros = ["IronMan","SpiderMan","Thor"]
const dc_heros = ["BatMan","SuperMan","Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // pushes the dc_heros as an element in the array
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // ... this is spread operator which breaks all the elements into single element
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,[6,7,8,[9,10]],11,12,[13,14,[15],[16,[17,18]]],19],20]

const real_another_array = another_array.flat(Infinity) // returns a single array consisting of all the elements in nested array 
// console.log(real_another_array);

// console.log(Array.isArray(marvel_heros));
// console.log(Array.from("Rizwan"));
// console.log(Array.from({name: "Rizwan"})); // interesting, gives an empty array

const obj = {
    a: 1,
    b: 2
  };
  
  const newArray = Array.from(obj);
  console.log(newArray);