import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';

function TabelaEmprestimo() {
    const [emprestimo, setEmprestimo] = useState([]);
    
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        const fetchEmprestimo = async () => {
            try {
                const listaDeEmprestimo = await EmprestimoRequests.listarEmprestimo();
                setEmprestimo(listaDeEmprestimo);
                console.table(emprestimo);

            } catch (error) {
                console.error('Erro ao buscar emprestimos:', error);
            }
        };
        fetchEmprestimo();

    }, [emprestimo]);

    return (
        <>
            <DataTable value={emprestimo} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="nomeAluno" header="Nome do Aluno" style={{ width: '25%' }}></Column>
                <Column field="nomeLivro" header="Nome do Livro" style={{ width: '25%' }}></Column>
                <Column field="dataEmprestimo" header="Data do Empréstimo" style={{ width: '25%' }} body={(row) => new Date(row.dataEmprestimo).toLocaleDateString('pt-BR')}></Column>
                <Column field="dataDevolucao" header="Data de Devolução" style={{ width: '25%' }}body={(row) => new Date(row.dataEmprestimo).toLocaleDateString('pt-BR')}></Column>
            </DataTable>
        </>
    )
}

export default TabelaEmprestimo;