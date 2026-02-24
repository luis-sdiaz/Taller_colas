"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Clase Cliente
var Cliente = /** @class */ (function () {
    function Cliente(nombre, pedido) {
        this.nombre = nombre;
        this.pedido = pedido;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getPedido = function () {
        return this.pedido;
    };
    return Cliente;
}());
// Clase Cola
var Cola = /** @class */ (function () {
    function Cola() {
        this.clientes = [];
    }
    Cola.prototype.encolar = function (cliente) {
        this.clientes.push(cliente);
        console.log("".concat(cliente.getNombre(), " pidi\u00F3 ").concat(cliente.getPedido(), " y se puso en la fila"));
    };
    Cola.prototype.desencolar = function () {
        var cliente = this.clientes.shift();
        if (cliente) {
            console.log("".concat(cliente.getNombre(), " recibi\u00F3 su ").concat(cliente.getPedido()));
        }
        else {
            console.log("No hay más pedidos en la fila");
        }
    };
    Cola.prototype.mostrarFila = function () {
        var nombres = this.clientes.map(function (c) { return "".concat(c.getNombre(), " (").concat(c.getPedido(), ")"); });
        console.log("Fila actual:", nombres);
    };
    return Cola;
}());
// Simulación interactiva
var fila = new Cola();
console.log("=== Cafetería - Sistema de Pedidos ===");
for (var i = 0; i < 3; i++) {
    var nombre = readlineSync.question("Ingrese nombre del cliente: ");
    var pedido = readlineSync.question("Ingrese pedido del cliente: ");
    fila.encolar(new Cliente(nombre, pedido));
}
fila.mostrarFila();
console.log("\nAtendiendo pedidos...");
while (true) {
    var opcion = readlineSync.question("¿Atender siguiente cliente? (s/n): ");
    if (opcion.toLowerCase() === "s") {
        fila.desencolar();
    }
    else {
        console.log("Atención finalizada.");
        break;
    }
}
