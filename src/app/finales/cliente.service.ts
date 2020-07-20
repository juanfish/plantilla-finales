import { Injectable } from "@angular/core";
import { Cliente } from './cliente.model';

@Injectable({
    providedIn : 'root'
})
export class ClienteComponentService {
    clienteJSON : Cliente[];

    setClientes (cliente : Cliente[]){
        this.clienteJSON = cliente;        
    }

    getClientes(){
        return this.clienteJSON ;        
    }

}