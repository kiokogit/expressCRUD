import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        fname: "Johnte",
        age: 30,
        lname: "Doe"
    },
    {
        fname: "Jane",
        age: 23,
        lname: "Tyler"
    }
];

//functions for controls
export const createUser = (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the username ${user.lname} added to datatbase`);
};

export const getAllUsers = (req, res) => {
    res.send(users);
};

export const getOneUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted`);
};

export const modifyDetails = (req, res) => {
    const { id } = req.params;

    const { lname, fname, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (lname) user.lname = lname;
    if (fname) user.fname = fname;
    if (age) user.age = age;

    res.send(`User details changed`);
};

