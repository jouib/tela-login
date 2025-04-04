import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Welcome from "../../components/Welcome/Welcome";
import Rodape from "../../components/Rodape/Rodape";
import TabelaAluno from "../../components/Tabelas/TabelaAluno/TabelaAluno";
import TabelaLivro from "../../components/Tabelas/TabelaLivro/TabelaLivro";
import TabelaEmprestimo from "../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo";

function PHome() {
    return (
        <>
            <Cabecalho />
            
            <TabelaLivro/>
            <TabelaEmprestimo/>
            <Rodape />
        </>
    );
}

export default PHome;