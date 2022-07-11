const user = {
    id: 42,
    displayName: 'jmiller',
    fullName: {
        firstName: 'Joel',
        lastName: 'Miller'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user)); //42
console.log(getFullName(user)); //Joel Miller