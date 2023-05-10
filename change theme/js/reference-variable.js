const users = [
    {name: 'thomas', age: 18},
    {name: 'victor', age: 28},
    {name: 'dylan', age: 38},
    {name: 'daniel', age: 20},
    {name: 'roxy', age: 21},
    {name: 'nick', age: 25},
];

function myfunction(users) {
    users.forEach(item => {
        item.age += 2;
    });
}

myfunction(users);
console.log('users: ', users);

const user = {name: 'thomas', age: 18};
function changeAge(a) {
    a.name = 'victor';
}

changeAge(user);
console.log('user: ', user);