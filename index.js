const express = require('express');
const app = express();
const PORT = 3000;

// Array de productos
const productos = [
        { 
            id: 1, 
            nombre: "Cuaderno", 
            valor: 5000, 
            fechaVencimiento: "2024-12-31", 
            categoria: "Papelería", 
            descripcion: "Cuaderno de 100 hojas" 
        },
        { 
            id: 2, 
            nombre: "Lápiz", 
            valor: 300, 
            fechaVencimiento: "2024-10-21", 
            categoria: "Papelería", 
            descripcion: "Lápiz HB" 
        },
        { 
            id: 3, 
            nombre: "Tijeras", 
            valor: 1500, 
            fechaVencimiento: "2024-07-11", 
            categoria: "Papelería", 
            descripcion: "Tijeras escolares" 
        },
        { 
            id: 4, 
            nombre: "Borrador", 
            valor: 500, 
            fechaVencimiento: "2025-07-15", 
            categoria: "Papelería", 
            descripcion: "Borrador blanco" 
        },
        { 
            id: 5, 
            nombre: "Resaltador", 
            valor: 1000, 
            fechaVencimiento: "2026-09-08", 
            categoria: "Papelería", 
            descripcion: "Resaltador amarillo" 
        },
        { 
            id: 6, 
            nombre: "Regla", 
            valor: 800, 
            fechaVencimiento: "2030-11-31", 
            categoria: "Papelería", 
            descripcion: "Regla de 30 cm" 
        },
        { 
            id: 7, 
            nombre: "Corrector", 
            valor: 1200, 
            fechaVencimiento: "2024-01-11", 
            categoria: "Papelería", 
            descripcion: "Corrector líquido" 
        },
        { 
            id: 8, 
            nombre: "Libreta", 
            valor: 7000, 
            fechaVencimiento: "2025-06-30", 
            categoria: "Papelería", 
            descripcion: "Libreta de apuntes" 
        },
        { 
            id: 9, 
            nombre: "Calculadora", 
            valor: 15000, 
            fechaVencimiento: null, 
            categoria: "Papelería", 
            descripcion: "Calculadora básica" 
        },
        { 
            id: 10, 
            nombre: "Cinta adhesiva", 
            valor: 500, 
            fechaVencimiento: null, 
            categoria: "Papelería", 
            descripcion: "Cinta adhesiva transparente" 
        },
        { 
            id: 11, 
            nombre: "Pegamento", 
            valor: 1000, 
            fechaVencimiento: "2028-02-10", 
            categoria: "Papelería", 
            descripcion: "Pegamento en barra" 
        },
        { 
            id: 12, 
            nombre: "Bolso", 
            valor: 35000, 
            fechaVencimiento: null, 
            categoria: "Papelería", 
            descripcion: "Bolso de super man" 
        },
        { 
            id: 13, 
            nombre: "Grapadora", 
            valor: 3000, 
            fechaVencimiento: null, 
            categoria: "Papelería", 
            descripcion: "Grapadora metálica" 
        },
        { 
            id: 14, 
            nombre: "Papel", 
            valor: 1000, 
            fechaVencimiento: "2030-07-26", 
            categoria: "Papelería", 
            descripcion: "Papel bond tamaño carta" 
        },
        { 
            id: 15, 
            nombre: "Bolígrafo", 
            valor: 500, 
            fechaVencimiento: null, 
            categoria: "Papelería", 
            descripcion: "Bolígrafo azul" 
        }
    ];
    
// Array vehículos
const vehiculos = [
        { 
            id: 1, 
            marca: "Toyota", 
            cilindraje: 2000, 
            tipo: "Híbrido", 
            linea: "Corolla", 
            color: "Blanco", 
            placa: "ABC123", 
            valor: 50000000 
        },
        { 
            id: 2, 
            marca: "Toyota", 
            cilindraje: null, 
            tipo: "Eléctrico", 
            linea: "Model S", 
            color: "Negro", 
            placa: "XYZ456", 
            valor: 52000000 
        },
        { 
            id: 3, 
            marca: "Honda", 
            cilindraje: 1800, 
            tipo: "Gasolina", 
            linea: "Civic", 
            color: "Gris", 
            placa: "DEF789", 
            valor: 70000000 
        },
        { 
            id: 4, 
            marca: "Ford", 
            cilindraje: 2500, 
            tipo: "Gasolina", 
            linea: "Mustang", 
            color: "Rojo", 
            placa: "GHI012", 
            valor: 90000000 
        },
        { 
            id: 5, 
            marca: "Chevrolet", 
            cilindraje: 1600, 
            tipo: "Gasolina", 
            linea: "Spark", 
            color: "Azul", 
            placa: "JKL345", 
            valor: 30000000 
        },
        { 
            id: 6, 
            marca: "Honda", 
            cilindraje: 2000, 
            tipo: "Híbrido", 
            linea: "Sentra", 
            color: "Blanco", 
            placa: "MNO678", 
            valor: 64000000 
        },
        { 
            id: 7, 
            marca: "BMW", 
            cilindraje: 3000, 
            tipo: "Gasolina", 
            linea: "Serie 3", 
            color: "Negro", 
            placa: "PQR901", 
            valor: 120000000 
        },
        { 
            id: 8, 
            marca: "Honda", 
            cilindraje: 2000, 
            tipo: "Eléctrico", 
            linea: "E-Tron", 
            color: "Gris", 
            placa: "STU234", 
            valor: 110000000 
        },
        { 
            id: 9, 
            marca: "Volkswagen", 
            cilindraje: 1600, 
            tipo: "Gasolina", 
            linea: "Golf", 
            color: "Blanco", 
            placa: "VWX567", 
            valor: 50000000 
        },
        { 
            id: 10, 
            marca: "Mercedes-Benz", 
            cilindraje: 2500, 
            tipo: "Híbrido", 
            linea: "Clase C", 
            color: "Plata", 
            placa: "YZA890", 
            valor: 150000000 
        },
        { 
            id: 11, 
            marca: "Hyundai", 
            cilindraje: 2000, 
            tipo: "Eléctrico", 
            linea: "Kona", 
            color: "Rojo", 
            placa: "BCD123", 
            valor: 80000000 
        },
        { 
            id: 12, 
            marca: "Subaru", 
            cilindraje: 2500, 
            tipo: "Gasolina", 
            linea: "Outback", 
            color: "Verde", 
            placa: "EFG456", 
            valor: 95000000 
        },
        { 
            id: 13, 
            marca: "Mazda", 
            cilindraje: 1800, 
            tipo: "Gasolina", 
            linea: "CX-5", 
            color: "Gris", 
            placa: "HIJ789", 
            valor: 75000000 
        },
        { 
            id: 14, 
            marca: "Volvo", 
            cilindraje: 2000, 
            tipo: "Híbrido", 
            linea: "XC60", 
            color: "Negro", 
            placa: "KLM012", 
            valor: 140000000 
        },
        { 
            id: 15, 
            marca: "Kia", 
            cilindraje: 1600, 
            tipo: "Gasolina", 
            linea: "Rio", 
            color: "Blanco", 
            placa: "NOP345", 
            valor: 40000000 
        }
    ];
    
// #1. Endpoint para listar todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// #2. Endpoint para listar productos por categoría
app.get('/productos/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    const productosCategoria = productos.filter(producto => producto.categoria === categoria);
    res.json(productosCategoria);
});
// Profe una aclaracion en los dos anteriores endpoint es que al acceder a ellos
// me va a salir la misma informacion ya que en la info de mis arrays todos los productos tienen
// la misma categoria, si quisiera cambiar digamos la categoria de uno de ellos y al acceder a ella 
// por el endpoint #2 solo me mostraria ese registro


// #3. Endpoint para listar todos los vehículos
app.get('/vehiculos', (req, res) => {
    res.json(vehiculos);
});

// #4.Crear un endpoint que liste los productos que sean mayor 10.000
app.get('/productos-mayor-10000', (req, res) => {
    const productosMayor10000 = productos.filter(producto => producto.valor > 10000);
    res.json(productosMayor10000);
});

// #5. Endpoint para listar todos los productos y calcular el IVA para cada producto
app.get('/productos-con-iva', (req, res) => {
    const productosConIVA = productos.map(producto => {
        const precioConIVA = producto.valor * 1.19; //iva del 19%
        return {
            ...producto,
            precioConIVA: precioConIVA
        };
    });
    res.json(productosConIVA);
});

// #6.listar vehículos por marca
app.get('/vehiculos/:marca', (req, res) => {
    const marca = req.params.marca;
    const vehiculosMarca = vehiculos.filter(vehiculo => vehiculo.marca === marca);
    res.json(vehiculosMarca);
});

// #7. Endpoint para listar todos los vehículos y calcular el impuesto para cada uno
app.get('/vehiculos-con-impuesto', (req, res) => {
    const vehiculosConImpuesto = vehiculos.map(vehiculo => {
        let impuesto = 0;
        if (vehiculo.tipo === "Gasolina") {
            const valor = vehiculo.valor;
            if (valor <= 50000000) {
                impuesto = valor * 0.01;
            } else if (valor <= 100000000) {
                impuesto = valor * 0.015;
            } else if (valor <= 150000000) {
                impuesto = valor * 0.025;
            } else {
                impuesto = valor * 0.035;
            }
        } else if (vehiculo.tipo === "Eléctrico") {
            impuesto = vehiculo.valor * 0.01;
        }
        return {
            ...vehiculo,
            impuesto: impuesto
        };
    });
    res.json(vehiculosConImpuesto);
});

// #8: Endpoints adicionales

//Para productos:
//1.Endpoint para listar productos con valor menor a 1200
app.get('/productos-valor-menor', (req, res) => {
    const valorFijo = 1200;
    const productosValorMenor = productos.filter(producto => producto.valor < valorFijo);
    res.json(productosValorMenor);
});

//2. Endpoint para listar productos con valor igual a 1000
app.get('/productos-valor-igual-1000', (req, res) => {
    const valorFijo = 1000;
    const productosValorIgual1000 = productos.filter(producto => producto.valor === valorFijo);
    res.json(productosValorIgual1000);
});

//3. Endpoint para listar productos con fecha de vencimiento posterior al año 2027
app.get('/productos-vencimiento-posterior-2027', (req, res) => {
    const productosVencimientoPosterior2027 = productos.filter(producto => {
        if (producto.fechaVencimiento) {
            const year = parseInt(producto.fechaVencimiento.split('-')[0]);
            return year > 2027;
        }
        return false;
    });
    res.json(productosVencimientoPosterior2027);
});

//4. // Endpoint para listar productos con fecha de vencimiento null
app.get('/productos-sin-vencimiento', (req, res) => {
    const productosSinVencimiento = productos.filter(producto => !producto.fechaVencimiento);
    res.json(productosSinVencimiento);
});

//5. Endpoint para obtener el valor de la calculadora por su ID
app.get('/productos/calculadora/:id', (req, res) => {
    const idCalculadora = parseInt(req.params.id);
    const calculadora = productos.find(producto => producto.id === idCalculadora);
    if (calculadora && calculadora.nombre === "Calculadora") {
        res.json({ valor: calculadora.valor });
    } else {
        res.status(404).json({ error: "No se encontró la calculadora con ese ID" });
    }
}); 

//Endpoint para vehiculos:
//1. Endpoint para filtrar los vehiculos por su tipo, sea gasolina - electrico - hibrido
app.get('/vehiculos/tipo/:tipo', (req, res) => {
    const tipo = req.params.tipo.toLowerCase();
    const vehiculosPorTipo = vehiculos.filter(vehiculo => vehiculo.tipo.toLowerCase() === tipo);
    res.json(vehiculosPorTipo);
});

//2. Endpoint para listar los vehiculospor rango de valor, el valor se solicitado en el endpoint por el usuario
app.get('/vehiculos/valor/:min/:max', (req, res) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);
    const vehiculosPorValor = vehiculos.filter(vehiculo => vehiculo.valor >= min && vehiculo.valor <= max);
    res.json(vehiculosPorValor);
});

//3. Endpoint para listar los vehiculos por cilidraje, el valor se solicitado en el endpoint por el usuario
app.get('/vehiculos/cilindraje/:cilindraje', (req, res) => {
    const cilindraje = parseInt(req.params.cilindraje);
    const vehiculosPorCilindraje = vehiculos.filter(vehiculo => vehiculo.cilindraje === cilindraje);
    res.json(vehiculosPorCilindraje);
});

//4. Endopint para listar vehículos por color, el valor se solicitado en el endpoint por el usuario
app.get('/vehiculos/color/:color', (req, res) => {
    const color = req.params.color;
    const vehiculosColor = vehiculos.filter(vehiculo => vehiculo.color.toLowerCase() === color.toLowerCase());
    res.json(vehiculosColor);
});

//5. Endpoint para listar vehículos por línea, el valor se solicitado en el endpoint por el usuario
app.get('/vehiculos/linea/:linea', (req, res) => {
    const linea = req.params.linea.toLowerCase();
    const vehiculosPorLinea = vehiculos.filter(vehiculo => vehiculo.linea.toLowerCase() === linea);
    res.json(vehiculosPorLinea);
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
