import styled from "styled-components"

export const Container = styled.div`
    
    width: 20rem;
    
    font-size: 0.55rem;
    color: white;
    
    
    padding: 2rem 1rem 12rem;
    
   
    
    h1{
        text-align: left;
    }



    button{
        float: right;
        align-self: left;
        margin-top:1rem;
        font-size:0.75rem;
        color: #FFF;
        background-color:transparent;
        border: 0;
        padding: 2rem 0rem;
        border-radius:0.25rem;
        height:1rem;

        transition: 0.2s;

    }

    
    

`

export const Table = styled.table`
        margin-top: 2rem;

        width: 100%;
        border-spacing: 0 0.5rem;
        

        

        td{
            position: relative;
            width: 100%;
            text-align: left;
            padding:0.20rem 0.5rem;
            padding-bottom:0.75rem;
            border:0;
            background-color: var(--shape);
            color: var(--text-body);
            border-radius:0.25rem;
            
            &:first-child{
                color: var(--text-title);
            }

            h3{
                font-size :1rem;
                margin-top: 0 ;
                margin-bottom: 0.5rem;
            }
            button{
            padding:0;
            margin-top: 0;
            position: relative;
            width: 1rem;
            height: 1rem;

            img{
                width: 1rem;
                height: 1rem;
            }
        }
            
        }
        
    
`