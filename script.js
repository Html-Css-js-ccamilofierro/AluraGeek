const productos = [
    {
        id: 1,
        nombre: "PlayStation 5",
        precio: 499.99,
        descripcion: "Consola de videojuegos de última generación con gráficos 4K y controladores avanzados.",
        imagen: "./assets/images/ps5.webp",
        calificacion: 4.8,
        fecha: new Date(2023, 5, 15)
    },
    {
        id: 2,
        nombre: "Samsung Smart TV 55\"",
        precio: 699.99,
        descripcion: "Televisor UHD 4K con tecnología QLED, HDR10+ y control por voz.",
        imagen: "./assets/images/tv.jpg",
        calificacion: 4.5,
        fecha: new Date(2023, 6, 20)
    },
    {
        id: 3,
        nombre: "Nintendo Switch OLED",
        precio: 349.99,
        descripcion: "Consola híbrida con pantalla OLED mejorada y modos portátil y sobremesa.",
        imagen: "./assets/images/switch.jpg",
        calificacion: 4.7,
        fecha: new Date(2022, 11, 8)
    },
    {
        id: 4,
        nombre: "Apple iPhone 14 Pro",
        precio: 1099.99,
        descripcion: "Smartphone con pantalla Super Retina XDR, cámara avanzada y chip A16 Bionic.",
        imagen: "./assets/images/iphone14.jpg",
        calificacion: 4.9,
        fecha: new Date(2023, 9, 1)
    },
    {
        id: 5,
        nombre: "Apple MacBook Air M2",
        precio: 1299.99,
        descripcion: "Portátil ultraligero con chip M2, batería de larga duración y pantalla Retina.",
        imagen: "./assets/images/macbook.jpg",
        calificacion: 4.6,
        fecha: new Date(2022, 8, 12)
    },
    {
        id: 6,
        nombre: "Sony WH-1000XM5",
        precio: 349.99,
        descripcion: "Auriculares inalámbricos con cancelación activa de ruido y audio de alta calidad.",
        imagen: "./assets/images/auriculares.webp",
        calificacion: 4.7,
        fecha: new Date(2023, 2, 18)
    },
    {
        id: 7,
        nombre: "GoPro HERO11 Black",
        precio: 499.99,
        descripcion: "Cámara de acción 5K con estabilización avanzada y resistente al agua.",
        imagen: "./assets/images/gopro.webp",
        calificacion: 4.8,
        fecha: new Date(2023, 3, 10)
    },
    {
        id: 8,
        nombre: "Xiaomi Mi Robot Vacuum",
        precio: 299.99,
        descripcion: "Robot aspirador con navegación inteligente y función de fregado.",
        imagen: "./assets/images/robot-vacuum.webp",
        calificacion: 4.4,
        fecha: new Date(2023, 4, 25)
    },
    {
        id: 9,
        nombre: "Apple AirPods Pro 2da Gen",
        precio: 249.99,
        descripcion: "Auriculares inalámbricos con cancelación activa de ruido y ajuste personalizable.",
        imagen: "./assets/images/airpods.jpeg",
        calificacion: 4.9,
        fecha: new Date(2023, 7, 19)
    },
    {
        id: 10,
        nombre: "Microsoft Surface Pro 9",
        precio: 999.99,
        descripcion: "Tableta convertible con pantalla táctil y procesador Intel Core i7.",
        imagen: "./assets/images/surface-pro.jpeg",
        calificacion: 4.5,
        fecha: new Date(2023, 10, 5)
    },
    {
        id: 11,
        nombre: "Razer BlackWidow V3",
        precio: 149.99,
        descripcion: "Teclado mecánico para gaming con iluminación RGB personalizable.",
        imagen: "./assets/images/teclado.jpg",
        calificacion: 4.6,
        fecha: new Date(2022, 6, 13)
    },
    {
        id: 12,
        nombre: "Samsung Galaxy Watch6",
        precio: 349.99,
        descripcion: "Reloj inteligente con monitoreo de salud y GPS integrado.",
        imagen: "./assets/images/galaxy-watch.jpeg",
        calificacion: 4.7,
        fecha: new Date(2023, 1, 22)
    },
    {
        id: 13,
        nombre: "DJI Mini 3 Pro",
        precio: 749.99,
        descripcion: "Dron compacto con cámara 4K y tiempo de vuelo de 34 minutos.",
        imagen: "./assets/images/dji-drone.jpg",
        calificacion: 4.8,
        fecha: new Date(2022, 9, 30)
    },
    {
        id: 14,
        nombre: "Kindle Paperwhite",
        precio: 129.99,
        descripcion: "Lector de libros electrónicos con pantalla antirreflejo y luz ajustable.",
        imagen: "./assets/images/kindle.webp",
        calificacion: 4.6,
        fecha: new Date(2022, 10, 2)
    },
    {
        id: 15,
        nombre: "Logitech MX Master 3S",
        precio: 99.99,
        descripcion: "Ratón ergonómico con precisión láser y batería de larga duración.",
        imagen: "./assets/images/mouse.jpg",
        calificacion: 4.5,
        fecha: new Date(2023, 8, 14)
    }
];

const productosPorPagina = 6;
let paginaActual = 1;
let carrito = [];
let userRole = 'user';

function mostrarProductos(productosAMostrar = productos) {
    const productosContainer = document.querySelector('.products-grid');
    productosContainer.innerHTML = '';
    
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosAMostrar.slice(inicio, fin);
    
    productosPagina.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.className = 'product-card';
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
            <div class="product-header">
                <h3 class="product-title">${producto.nombre}</h3>
                <div class="product-rating">
                    <span>⭐ ${producto.calificacion.toFixed(1)}</span>
                </div>
            </div>
            <div class="product-info">
                <p class="product-price">$${producto.precio.toFixed(2)}</p>
                <p class="product-date">${producto.fecha.toLocaleDateString()}</p>
            </div>
            <p class="product-description">${producto.descripcion}</p>
            <div class="product-actions">
                ${userRole === 'admin' ? `
                    <button class="edit-btn btn" data-id="${producto.id}">Editar</button>
                    <button class="delete-btn btn" data-id="${producto.id}">Eliminar</button>
                ` : `
                    <button class="add-to-cart-btn btn" data-id="${producto.id}">Agregar al carrito</button>
                `}
            </div>
        `;
        productosContainer.appendChild(productoElement);
    });

    actualizarPaginacion(productosAMostrar.length);

    // Agregar event listeners para editar, eliminar y agregar al carrito
    if (userRole === 'admin') {
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => editarProducto(e.target.dataset.id));
        });
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => eliminarProducto(e.target.dataset.id));
        });
    } else {
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => agregarAlCarrito(e.target.dataset.id));
        });
    }
}

function actualizarPaginacion(totalProductos) {
    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');

    prevBtn.disabled = paginaActual === 1;
    nextBtn.disabled = paginaActual === totalPaginas;

    currentPageSpan.textContent = `Página ${paginaActual} de ${totalPaginas}`;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarProductos();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarProductos();
    }
});

const modal = document.getElementById('productModal');
const floatingAddBtn = document.getElementById('floatingAddBtn');
const closeModal = document.getElementById('closeModal');
const productForm = document.getElementById('productForm');
const modalTitle = document.getElementById('modalTitle');
const submitBtn = document.getElementById('submitBtn');

function toggleModal() {
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

floatingAddBtn.addEventListener('click', () => {
    modalTitle.textContent = 'Agregar Nuevo Producto';
    submitBtn.textContent = 'Agregar Producto';
    productForm.reset();
    document.getElementById('productId').value = '';
    toggleModal();
});

closeModal.addEventListener('click', toggleModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

productForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productId = document.getElementById('productId').value;
    const nuevoProducto = {
        id: productId ? parseInt(productId) : Date.now(),
        nombre: document.getElementById('nombre').value,
        precio: parseFloat(document.getElementById('precio').value),
        descripcion: document.getElementById('descripcion').value,
        imagen: document.getElementById('imagen').value,
        calificacion: parseFloat(document.getElementById('calificacion').value),
        fecha: new Date()
    };
    
    if (productId) {
        // Editar producto existente
        const index = productos.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            productos[index] = nuevoProducto;
        }
    } else {
        // Agregar nuevo producto
        productos.push(nuevoProducto);
    }
    
    this.reset();
    toggleModal();
    mostrarProductos();
    mostrarToast(productId ? '¡Producto actualizado exitosamente!' : '¡Producto agregado exitosamente!');
});

function editarProducto(id) {
    const producto = productos.find(p => p.id === parseInt(id));
    if (producto) {
        document.getElementById('productId').value = producto.id;
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('precio').value = producto.precio;
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('imagen').value = producto.imagen;
        document.getElementById('calificacion').value = producto.calificacion;
        
        modalTitle.textContent = 'Editar Producto';
        submitBtn.textContent = 'Actualizar Producto';
        toggleModal();
    }
}

function eliminarProducto(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        const index = productos.findIndex(p => p.id === parseInt(id));
        if (index !== -1) {
            productos.splice(index, 1);
            mostrarProductos();
            mostrarToast('Producto eliminado exitosamente');
        }
    }
}

function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
    `;
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(searchTerm) ||
        producto.descripcion.toLowerCase().includes(searchTerm)
    );
    paginaActual = 1; // Resetear a la primera página al buscar
    mostrarProductos(productosFiltrados);
});

document.getElementById('userRole').addEventListener('change', function() {
    userRole = this.value;
    mostrarProductos();
    if (userRole === 'admin') {
        document.getElementById('cartButton').style.display = 'none';
        floatingAddBtn.style.display = 'flex';
    } else {
        document.getElementById('cartButton').style.display = 'flex';
        floatingAddBtn.style.display = 'none';
    }
});

document.getElementById('sortBy').addEventListener('change', function() {
    const sortValue = this.value;
    let productosOrdenados = [...productos];
    
    switch(sortValue) {
        case 'dateDesc':
            productosOrdenados.sort((a, b) => b.fecha - a.fecha);
            break;
        case 'dateAsc':
            productosOrdenados.sort((a, b) => a.fecha - b.fecha);
            break;
        case 'ratingDesc':
            productosOrdenados.sort((a, b) => b.calificacion - a.calificacion);
            break;
        case 'ratingAsc':
            productosOrdenados.sort((a, b) => a.calificacion - b.calificacion);
            break;
        default:
            // 'relevance' - no sorting needed, products are already in their original order
            break;
    }
    
    paginaActual = 1;
    mostrarProductos(productosOrdenados);
});

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === parseInt(id));
    if (producto) {
        const itemEnCarrito = carrito.find(item => item.id === producto.id);
        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        actualizarCarrito();
        mostrarToast('Producto agregado al carrito');
    }
}

function actualizarCarrito() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartCount.textContent = totalItems;
}

document.getElementById('cartButton').addEventListener('click', mostrarCarrito);

function mostrarCarrito() {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <p class="cart-item-name">${item.nombre}</p>
                <p class="cart-item-price">$${item.precio.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                <input type="number" class="quantity-input" value="${item.cantidad}" min="1" data-id="${item.id}">
                <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item-btn" data-id="${item.id}" aria-label="Eliminar ${item.nombre} del carrito">🗑️</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.precio * item.cantidad;
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    cartModal.style.display = 'block';
    
    // Event listeners para los botones de cantidad y eliminar
    document.querySelectorAll('.decrease-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => actualizarCantidad(e.target.dataset.id, -1));
    });
    document.querySelectorAll('.increase-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => actualizarCantidad(e.target.dataset.id, 1));
    });
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => actualizarCantidadDirecta(e.target.dataset.id, e.target.value));
    });
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => eliminarDelCarrito(e.target.dataset.id));
    });
}

function actualizarCantidad(id, cambio) {
    const item = carrito.find(item => item.id === parseInt(id));
    if (item) {
        item.cantidad = Math.max(1, item.cantidad + cambio);
        actualizarCarrito();
        mostrarCarrito();
    }
}

function actualizarCantidadDirecta(id, nuevaCantidad) {
    const item = carrito.find(item => item.id === parseInt(id));
    if (item) {
        item.cantidad = Math.max(1, parseInt(nuevaCantidad) || 1);
        actualizarCarrito();
        mostrarCarrito();
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== parseInt(id));
    actualizarCarrito();
    mostrarCarrito();
}

document.getElementById('closeCartModal').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    // Inicializar la visibilidad del botón de carrito y el botón flotante basado en el rol inicial
    if (userRole === 'admin') {
        document.getElementById('cartButton').style.display = 'none';
        floatingAddBtn.style.display = 'flex';
    } else {
        document.getElementById('cartButton').style.display = 'flex';
        floatingAddBtn.style.display = 'none';
    }
});

// Mostrar productos iniciales
mostrarProductos();