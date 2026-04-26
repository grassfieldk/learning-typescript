// ---- 02: オブジェクト型・interface ----

// (1) 以下のオブジェクトに対応する interface User を定義せよ
//     name: string、age: number、email: オプショナルな string

const user: User = { name: "Bob", age: 30 };
console.log(user.name, user.age);

// (2) interface Product を定義せよ
//     id: number（readonly）、name: string、price: number

const product: Product = { id: 1, name: "Keyboard", price: 5000 };
console.log(product.id, product.name, product.price);

// (3) interface Animal と、それを拡張した interface Pet を定義せよ
//     Animal: name: string、sound: string
//     Pet: Animal を継承し、owner: string を追加

const pet: Pet = { name: "Pochi", sound: "Woof", owner: "Taro" };
console.log(pet.name, pet.sound, pet.owner);
