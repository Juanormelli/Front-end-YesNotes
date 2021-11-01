import { Container, Table } from "./style";


export function Sidebar(){
    return (
        <Container>
            <h1>Nome do Usuario</h1>

            <button>+ Nota Nova</button>
            <Table>
            
                <tbody>
                <tr>
                    <td>
                        <h3>Titulo de nota</h3>
                        <p>Preview da nota</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Titulo de nota</h3>
                        <p>Preview da nota</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Titulo de nota</h3>
                        <p>Preview da nota</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Titulo de nota</h3>
                        <p>Preview da nota</p>
                    </td>
                </tr>
                
                </tbody>
            
            
            </Table>
        </Container>
    )
}