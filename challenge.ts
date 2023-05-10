// challenge.ts
const prettyPrintWilder = (users : any) => {
    users.map((user: {name : string, age : number, birthday : string}) => {
        console.log(`${user.name} is ${user.age||user.birthday} years old`);
    });
};
    
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);