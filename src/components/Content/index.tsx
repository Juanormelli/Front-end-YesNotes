import { Container } from "./style";
import { ContentState, Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useEffect, useState } from "react";
import {stateToHTML} from 'draft-js-export-html';
import { api } from "../../services/api";
import { stateFromHTML } from "draft-js-import-html";
import { title } from "process";


interface Note{
    title: string;
    id: string;
    content: string;

}

function style() {
    return "editor"
}


export function Content(){


    

    
    const [notes, setNotes] = useState<Note>()

    const id ="3898b4f4-f8af-47cb-9e71-1b492b99b06c"

    useEffect( ()=>{
        api.get(`/notes/list/a02140d2-899f-4f30-ba7e-4fc5efee4cac/${id}`).then(response => {setNotes(response.data)})
        
    },[])
    
  
    let htmlContent = "Teste2"
    htmlContent = htmlContent.toString()

    let content = notes?.content===undefined ? htmlContent : notes?.content
    
    let note = new DOMParser()
    

    let doc = note.parseFromString(content,"text/html")
    
    let docS = doc.body.innerHTML.toString()
    console.log(docS)
    
    
    



    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(stateFromHTML(docS))
    );

    useEffect( ()=>{
        setEditorState(EditorState.createWithContent(stateFromHTML(docS)))
    },[])

    useEffect(() => {
        const teste =editorState.getCurrentContent()
        let htmlContent2 = stateToHTML(teste)
        console.log(htmlContent2)
        let htmlS = htmlContent2.toString()
        api.post(`notes/update/${id}`,{title:"Nome da Nota", content:htmlS}).then(response=>{()=>setEditorState(EditorState.createWithContent(stateFromHTML(response.data.content)))})
  

    },[])

    

  
  
  
    
    return (
        <Container>
            <h1 > Nome da Nota</h1>
            {/* <button onClick={updateNote}>Save Note</button> */}
            <Editor  editorState={editorState} onChange={setEditorState} blockStyleFn={style}> </Editor>
            

        </Container>
    )
}