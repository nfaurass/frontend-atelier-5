const avatarElement = document.getElementById("avatar");
const emailElement = document.getElementById("email");
const nameElement = document.getElementById("name");
const genderElement = document.getElementById("gender");
const userTableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
const orderTableBody = document.getElementById('orderTable').getElementsByTagName('tbody')[0];

async function getUsers() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
        {
            name: 'John Doe',
            email: 'johndoe@example.com',
            avatar: 'avatar.jpeg',
            gender: 'M',
            login: 'john.doe',
            password: 'password123',
            address: '123 Main St, Anytown, USA'
        },
    ];
}

async function getCommandes() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
        {
            orderId: '001',
            customerEmail: 'johndoe@example.com',
            product: 'Laptop',
            quantity: 1,
            price: 1200.00,
            status: 'Shipped',
            address: '123 Main St, Anytown, USA',
            orderDate: '2024-06-01'
        },
        {
            orderId: '002',
            customerEmail: 'johndoe@example.com',
            product: 'Smartphone',
            quantity: 2,
            price: 800.00,
            status: 'Processing',
            address: '456 Elm St, Othertown, USA',
            orderDate: '2024-06-03'
        },
    ];
}

async function getAll() {
    const users = await getUsers();
    const commandes = await getCommandes();
    return { users, commandes };
}

function createUserRow(user) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${user.avatar}" alt="Avatar" width="50"></td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.login}</td>
        <td>${user.password}</td>
        <td>${user.address}</td>
    `;
    return row;
}

function createOrderRow(order) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${order.orderId}</td>
        <td>${order.customerEmail}</td>
        <td>${order.product}</td>
        <td>${order.quantity}</td>
        <td>${order.price.toFixed(2)}</td>
        <td>${order.status}</td>
        <td>${order.address}</td>
        <td>${order.orderDate}</td>
    `;
    return row;
}

(async () => {

    const { users, commandes } = await getAll();

    nameElement.innerText = users[0].name;
    emailElement.innerText = users[0].email;
    genderElement.innerText = users[0].gender;
    avatarElement.setAttribute("src", users[0].avatar);

    users.forEach(user => {
        const userRow = createUserRow(user);
        userTableBody.appendChild(userRow);
    });

    commandes.forEach(order => {
        const orderRow = createOrderRow(order);
        orderTableBody.appendChild(orderRow);
    });

})();