import * as readlineSync from 'readline-sync';

// Clase Cliente
class Cliente {
    private nombre: string;
    private pedido: string;

    constructor(nombre: string, pedido: string) {
        this.nombre = nombre;
        this.pedido = pedido;
    }

    getNombre(): string {
        return this.nombre;
    }

    getPedido(): string {
        return this.pedido;
    }
}

// Clase Cola
class Cola {
    private clientes: Cliente[] = [];

    encolar(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log(`${cliente.getNombre()} pidió ${cliente.getPedido()} y se puso en la fila`);
    }

    desencolar(): void {
        const cliente = this.clientes.shift();
        if (cliente) {
            console.log(`${cliente.getNombre()} recibió su ${cliente.getPedido()}`);
        } else {
            console.log("No hay más pedidos en la fila");
        }
    }

    mostrarFila(): void {
        const nombres = this.clientes.map(c => `${c.getNombre()} (${c.getPedido()})`);
        console.log("Fila actual:", nombres);
    }
}

// Simulación interactiva
const fila = new Cola();

console.log("=== Cafetería - Sistema de Pedidos ===");

for (let i = 0; i < 3; i++) {
    const nombre = readlineSync.question("Ingrese nombre del cliente: ");
    const pedido = readlineSync.question("Ingrese pedido del cliente: ");
    fila.encolar(new Cliente(nombre, pedido));
}

fila.mostrarFila();

console.log("\nAtendiendo pedidos...");
while (true) {
    const opcion = readlineSync.question("¿Atender siguiente cliente? (s/n): ");
    if (opcion.toLowerCase() === "s") {
        fila.desencolar();
    } else {
        console.log("Atención finalizada.");
        break;
    }
}