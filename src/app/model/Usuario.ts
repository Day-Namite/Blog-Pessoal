import { Posts } from "./Posts"

export class Usuario{
    public idUsuario: number
    public email: string 
    public usuario: string
    public senha: string
    public foto: string
    public tipoUsuario: string
    public posts: Posts[]
}