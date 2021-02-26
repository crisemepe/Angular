export interface Evento {
    id: string;
    titulo: string;
    fotoP: string;
    fotoM: string;
    fecha: Date;
    sitio: String;
    descripcion: string;
    nivel?: string;
    plazas: number;
    precio?: number;
    tipo: string;
    /*usuarios?: Array<usuarios>;*/
}
