import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import LivroRequests from '../../../fetch/LivroRequests';

function TabelaLivro() {
    const [livros, setLivros] = useState([]);
    
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivro();
                setLivros(listaDeLivros);
                console.table(livros);

            } catch (error) {
                console.error(`Erro ao buscar livros:, ${error}`);
            }
        };
        fetchLivros();
    }, [livros]);

    return (
        <>
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="Título" style={{ width: '25%' }}></Column>
                <Column field="autor" header="Autor" style={{ width: '25%' }}></Column>
                <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
                <Column field="isbn" header="ISBN" style={{ width: '25%' }}></Column>
                <Column field="valoraquisicao" header="Valor da Aquisição" style={{ width: '25%' }} body={(rowData) => rowData.valoraquisicao?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
/>
            </DataTable>
        </>
    )
}

export default TabelaLivro;