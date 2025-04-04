import { SERVER_CFG } from '../appConfig';

class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastroLivro;
    private routeAtualizaLivro;
    private routeRemoverLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListaLivro = '/lista/livros'; // Rota configurada na API
        this.routeCadastroLivro = '/novo/livro'; // Rota configurada na API
        this.routeAtualizaLivro = 'atualiza/livro'; // Rota configurada na API
        this.routeRemoverLivro = '/remove/livro'; // Rota configurada na API
    }

    /**
     * Função que busca a lista de livros na API
     */
    async listarLivro() {
        try {
            const respostaAPI = await fetch (`${this.serverURL}${this.routeListaLivro}`)

            if(respostaAPI.ok) {
                const listaDeLivros = await respostaAPI .json();
                return listaDeLivros;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests;