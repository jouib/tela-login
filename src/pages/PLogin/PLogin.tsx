import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormAluno from "../../components/Formularios/FormAluno/FormAluno";
import LoginForm from "../../components/LoginForm/LoginForm";
import Rodape from "../../components/Rodape/Rodape";
import FormLivro from "../../components/Formularios/FormLivro/FormLivro";

function PLogin() {
    return (
        <>
            <Cabecalho />
            {/* <LoginForm/> */}
            <FormLivro />
            <Rodape />
        </>
    );
}

export default PLogin;