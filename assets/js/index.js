const apiUrl = 'https://jsonplaceholder.typicode.com/users/1'; // Cambia esto por la URL de tu API real

// Función para obtener un usuario
async function getUser() {
    const response = await fetch(apiUrl);
    const user = await response.json();
    displayUser(user);
}

// Función para mostrar el usuario en el contenedor
function displayUser(user) {
    const container = document.getElementById('userContainer');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Teléfono: ${user.phone}</p>
        <p>Dirección: ${user.address.street}, ${user.address.city}</p>
        <p>Empresa: ${user.company.name}</p>
    `;
    container.appendChild(card);
}

// Inicializar la aplicación
getUser();

//////////////////////////////////////////////////////////////

// Agregar evento al botón
document.getElementById('updateButton').addEventListener('click', updateUser);

// Simular la URL de una API
const apiUrl1 = 'https://jsonplaceholder.typicode.com/users';

// Función para agregar un nuevo usuario
async function addUser() {
    const newUser = {
        name: 'Nuevo Usuario',
        email: 'nuevo@usuario.com',
        phone: '123-456-7890',
        address: {
            street: 'Calle Ejemplo',
            city: 'Ciudad Ejemplo',
        },
        company: {
            name: 'Empresa Ejemplo',
        }
    };

    // Simulación de la solicitud POST
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ok: true,
                json: () => Promise.resolve({ ...newUser, id: Math.random() * 1000 }) // Simular una respuesta
            });
        }, 500); // Simular un retraso de 500 ms
    });

    if (response.ok) {
        const user = await response.json();
        displayUser(user);
    } else {
        console.error('Error al agregar el usuario');
    }
}

// Función para mostrar el usuario en el contenedor
function displayUser(user) {
    const container = document.getElementById('userContainer1');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Teléfono: ${user.phone}</p>
        <p>Dirección: ${user.address.street}, ${user.address.city}</p>
        <p>Empresa: ${user.company.name}</p>
    `;
    container.appendChild(card);
}

// Inicializar la aplicación
addUser();

/////////////////////////////////////////////////////////////77

// Función para obtener el usuario inicial
async function UpUser() {
    const response = await fetch(apiUrl);
    const user = await response.json();
    MostrarUser(user);
}

// Función para mostrar el usuario en el contenedor
function MostrarUser(user) {
    const container = document.getElementById('userContainer2');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar un nuevo usuario
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3 id="userName">${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Teléfono: ${user.phone}</p>
        <p>Dirección: ${user.address.street}, ${user.address.city}</p>
        <p>Empresa: ${user.company.name}</p>
    `;
    container.appendChild(card);
}

// Función para actualizar el nombre del usuario
async function updateUser() {
    const updatedUser = {
        name: 'Nombre Actualizado', // Nuevo nombre
        email: 'actualizado@usuario.com',
        phone: '123-456-7890',
        address: {
            street: 'Calle Ejemplo',
            city: 'Ciudad Ejemplo',
        },
        company: {
            name: 'Empresa actualizado',
        }
    };

    const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
        const user = await response.json();
        MostrarUser(user); // Mostrar el usuario actualizado
    } else {
        console.error('Error al actualizar el usuario:', response.status);
    }
}

// Inicializar la aplicación
UpUser();

///////////////////////////////////////////////////////////////////////////

async function User() {
    const response = await fetch(apiUrl);
    
    if (response.ok) {
        const user = await response.json();
        disUser(user);
    } else {
        console.error('Error al obtener el usuario:', response.status);
    }
}

// Función para mostrar el usuario en el contenedor
function disUser(user) {
    const container = document.getElementById('userContainer3');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar un nuevo usuario
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Teléfono: ${user.phone}</p>
        <p>Dirección: ${user.address.street}, ${user.address.city}</p>
        <p>Empresa: ${user.company.name}</p>
    `;
    container.appendChild(card);
}

// Función para eliminar el usuario
async function deleteUser() {
    const response = await fetch(apiUrl, {
        method: 'DELETE'
    });

    if (response.ok) {
        alert('Usuario eliminado.'); // Mensaje de confirmación
        const container = document.getElementById('userContainer3');
        container.innerHTML = ''; // Limpiar el contenedor después de la eliminación
    } else {
        alert('Error al eliminar el usuario: ' + response.status); // Mensaje de error
    }
}

// Inicializar la aplicación
User();

// Agregar evento al botón
document.getElementById('deleteButton').addEventListener('click', deleteUser);
