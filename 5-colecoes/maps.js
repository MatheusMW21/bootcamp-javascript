const getAdmins = (map) => {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key)
        }
    }

    return admins;
};

const users = new Map();

users.set('Bianca', 'ADMIN');
users.set('Kim', 'ADMIN');
users.set('Matheus', 'SUDO');
users.set('João', 'USER');
users.set('Caroline', 'USER');

console.log(getAdmins(users));