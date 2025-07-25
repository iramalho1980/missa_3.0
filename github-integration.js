// Integração com GitHub para persistência de dados
class GitHubIntegration {
    constructor() {
        this.owner = 'iramalho1980';
        this.repo = 'missa_3.0';
        // Token será configurado via prompt ou variável de ambiente
        this.token = null;
        this.apiBase = 'https://api.github.com';
    }

    // Configurar token
    setToken(token) {
        this.token = token;
    }

    // Verificar se token está configurado
    checkToken() {
        if (!this.token) {
            const token = prompt('Digite seu GitHub Personal Access Token:');
            if (token) {
                this.setToken(token);
                // Salvar no localStorage para sessão atual
                localStorage.setItem('github_token', token);
            } else {
                throw new Error('Token do GitHub é necessário para salvar/carregar missas');
            }
        }
    }

    // Salvar missa no GitHub
    async salvarMissaGitHub(nome, dados) {
        this.checkToken();
        
        try {
            const fileName = `missas/${nome}.json`;
            const content = btoa(JSON.stringify(dados, null, 2));
            
            // Verificar se o arquivo já existe
            let sha = null;
            try {
                const existingFile = await this.getFile(fileName);
                sha = existingFile.sha;
            } catch (e) {
                // Arquivo não existe, será criado
            }

            const response = await fetch(`${this.apiBase}/repos/${this.owner}/${this.repo}/contents/${fileName}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: `Salvar missa: ${nome}`,
                    content: content,
                    ...(sha && { sha })
                })
            });

            if (!response.ok) {
                throw new Error(`Erro ao salvar: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erro ao salvar missa no GitHub:', error);
            throw error;
        }
    }

    // Carregar missa do GitHub
    async carregarMissaGitHub(nome) {
        this.checkToken();
        
        try {
            const fileName = `missas/${nome}.json`;
            const file = await this.getFile(fileName);
            const content = atob(file.content);
            return JSON.parse(content);
        } catch (error) {
            console.error('Erro ao carregar missa do GitHub:', error);
            throw error;
        }
    }

    // Listar missas salvas
    async listarMissas() {
        this.checkToken();
        
        try {
            const response = await fetch(`${this.apiBase}/repos/${this.owner}/${this.repo}/contents/missas`, {
                headers: {
                    'Authorization': `token ${this.token}`,
                }
            });

            if (!response.ok) {
                if (response.status === 404) {
                    return []; // Pasta não existe ainda
                }
                throw new Error(`Erro ao listar missas: ${response.statusText}`);
            }

            const files = await response.json();
            return files
                .filter(file => file.name.endsWith('.json'))
                .map(file => file.name.replace('.json', ''));
        } catch (error) {
            console.error('Erro ao listar missas:', error);
            return [];
        }
    }

    // Obter arquivo do GitHub
    async getFile(path) {
        const response = await fetch(`${this.apiBase}/repos/${this.owner}/${this.repo}/contents/${path}`, {
            headers: {
                'Authorization': `token ${this.token}`,
            }
        });

        if (!response.ok) {
            throw new Error(`Arquivo não encontrado: ${path}`);
        }

        return await response.json();
    }

    // Deletar missa
    async deletarMissa(nome) {
        this.checkToken();
        
        try {
            const fileName = `missas/${nome}.json`;
            const file = await this.getFile(fileName);

            const response = await fetch(`${this.apiBase}/repos/${this.owner}/${this.repo}/contents/${fileName}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: `Deletar missa: ${nome}`,
                    sha: file.sha
                })
            });

            if (!response.ok) {
                throw new Error(`Erro ao deletar: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erro ao deletar missa:', error);
            throw error;
        }
    }
}

// Instância global da integração
const githubIntegration = new GitHubIntegration();

// Tentar carregar token do localStorage na inicialização
document.addEventListener('DOMContentLoaded', function() {
    const savedToken = localStorage.getItem('github_token');
    if (savedToken) {
        githubIntegration.setToken(savedToken);
    }
});

