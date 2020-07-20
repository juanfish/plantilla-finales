export interface Cliente {
	id: number;
	Direccion: string;
	Instruccion: string;
	Riesgo: number;
	Pais: number;
}

export interface RootObject {
	clientes: Cliente[];
}