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


export function Sidebar(){

    async function deleteNote(iduser:string){
        
        await api.delete("/notes/delete/a02140d2-899f-4f30-ba7e-4fc5efee4cac", {data:{id:iduser}})
        
        
        
    }

    async function createNote(){
        const res = await api.post("/notes/create/a02140d2-899f-4f30-ba7e-4fc5efee4cac",{content:"Nova Nota", title:"Nota Teste"})

        return console.log(res)
    }

    const [listNotes, setListNotes] = useState<Notes[]>([])

    useEffect( ()=>{
        
        api.get("/notes/list/a02140d2-899f-4f30-ba7e-4fc5efee4cac").then(response => {setListNotes(response.data)}).catch(error =>{setListNotes([])})
        
       
    })
    

    return (
        <Container>
            <h1>Nome do Usuario</h1>

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