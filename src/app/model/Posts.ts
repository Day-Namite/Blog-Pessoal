import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export  class Posts {
    public idPosts: number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: Usuario
    public tema: Tema
}