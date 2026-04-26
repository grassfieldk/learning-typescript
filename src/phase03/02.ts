// ---- 02: オブジェクト型・interface ----

// (1) 以下のオブジェクトに対応する interface User を定義せよ
//     name: string、age: number、email: オプショナルな string
// ここに追記

const user: User = { name: "Bob", age: 30 };
console.log(user.name, user.age);

// (2) interface Product を定義せよ
//     id: number（readonly）、name: string、price: number
// ここに追記

const product: Product = { id: 1, name: "Keyboard", price: 5000 };
console.log(product.id, product.name, product.price);

// (3) interface Animal と、extends を使って Animal を継承した interface Pet を定義せよ
//     Animal: name: string、sound: string
//     Pet: Animal を継承し、owner: string を追加
// ここに追記

const pet: Pet = { name: "Pochi", sound: "Woof", owner: "Taro" };
console.log(pet.name, pet.sound, pet.owner);
