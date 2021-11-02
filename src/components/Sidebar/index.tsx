import {  useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, Table } from "./style";
import logo from "../../img/Lixinho.png"

interface Notes{
    id: string;
    user_id: string;
    created_at: string;
    content: string;
    title: string;
}

interface User {
    username: string

}


export function Sidebar(){

    const [listNotes, setListNotes] = useState<Notes[]>([])
    const [listUser, setUser] = useState<User>()


    useEffect( ()=>{
        api.get("/notes/list/a02140d2-899f-4f30-ba7e-4fc5efee4cac").then(response => {setListNotes(response.data)}).catch(() =>{setListNotes([]) })

    },[])

    async function createNote(){
        const res = await api.post("/notes/create/a02140d2-899f-4f30-ba7e-4fc5efee4cac",{content:"Nova Nota", title:"Nota Teste"})
        console.log(res)
        setListNotes([...listNotes,res.data])
        return 
    }

    async function deleteNote(iduser:string){
        
        await api.delete("/notes/delete/a02140d2-899f-4f30-ba7e-4fc5efee4cac", {data:{id:iduser}})
        api.get("/notes/list/a02140d2-899f-4f30-ba7e-4fc5efee4cac").then(response => {setListNotes(response.data)}).catch(() =>{setListNotes([]) })
        
        
    }

    useEffect( ()=>{
        api.post("/auth", {username:"juanlucas", password:"1234"}).then(response => {setUser(response.data)})
    },[])
    

    return (
        <Container>
            <h1>{listUser?.username}</h1>

            <button onClick={createNote}>+ Nota Nova</button>
            <Table>
                <tbody>
                {listNotes.map((note)=>{
                    return (
                        <tr key={note.id}>
                            <td>
                                <button onClick = {()=>deleteNote(note.id)}>
                                    <img src={logo} alt="" />
                                </button>
                                <h3>{note.title}</h3>
                                <p>{note.content}</p>

                            </td>
                        </tr>

                    );
                })}
                </tbody>            
            
            </Table>
        </Container>
    )
}