# 🎵 Gerenciador de Cânticos - Missa 3.0

Sistema moderno e dinâmico para gerenciamento de cânticos de missa com design glass morphism e integração com GitHub.

## ✨ Funcionalidades

- **Design Moderno**: Interface com efeitos glass, blur e gradientes
- **Organização Litúrgica**: Quadros organizados na ordem da Missa do Tempo Comum
- **Arrastar e Soltar**: Funcionalidade drag & drop para organizar cânticos
- **Pesquisa Inteligente**: Busca por conteúdo dos cânticos
- **Visualização de PDFs**: Popup para visualizar letras dos cânticos
- **Persistência GitHub**: Salvar e carregar missas diretamente no GitHub
- **Responsivo**: Compatível com desktop e mobile

## 🎨 Design

- **Fundo**: Gradiente preto e prata
- **Acentos**: Amarelo neon (#ffff00) e branco neon
- **Fonte**: Ubuntu Mono
- **Efeitos**: Glass morphism, blur e cantos arredondados
- **Animações**: Transições suaves e efeitos hover

## 📋 Estrutura dos Quadros

1. **Entrada** - Cânticos de abertura
2. **Ato Penitencial** - Kyrie, perdão
3. **Glória** - Hinos de louvor
4. **Aclamação ao Evangelho** - Aleluia
5. **Ofertório** - Apresentação das ofertas
6. **Santo** - Sanctus
7. **Abraço da Paz** - Paz de Cristo
8. **Comunhão** - Cânticos eucarísticos
9. **Ação de Graças** - Agradecimento
10. **Final** - Cânticos de envio
11. **Cânticos Marianos** - Devoção mariana
12. **Louvor e Meditação** - Contemplação
13. **Diversos** - Outros cânticos

## 🚀 Como Usar

1. **Navegar pelos Quadros**: Clique nos títulos para expandir/recolher
2. **Adicionar à Missa**: Use o botão "+ Missa" em cada cântico
3. **Organizar**: Arraste cânticos para reordenar no Quadro Missa
4. **Visualizar**: Clique no nome do cântico para abrir o PDF
5. **Pesquisar**: Use a barra de pesquisa para encontrar cânticos
6. **Salvar**: Use "💾 Salvar" para persistir no GitHub
7. **Carregar**: Use "📂 Carregar" para recuperar missas salvas

## 🔧 Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com glass morphism
- **JavaScript ES6+**: Funcionalidades interativas
- **GitHub API**: Persistência de dados
- **Drag & Drop API**: Arrastar e soltar nativo

## 📁 Estrutura de Arquivos

```
missa_3.0/
├── index.html              # Página principal
├── github-integration.js   # Integração com GitHub API
├── README.md               # Documentação
└── Missa/                  # Pasta com os cânticos
    └── Missa/
        ├── 1 - Entrada/
        ├── 2 - Ato penitencial/
        ├── 3 - Gloria/
        └── ...
```

## 🔐 Configuração GitHub

O sistema está configurado para usar:
- **Repositório**: iramalho1980/missa_3.0
- **Pasta de Missas**: `/missas/`
- **Formato**: JSON com metadados

## 📱 Responsividade

- **Desktop**: Layout em grid com sidebar
- **Mobile**: Layout empilhado com navegação otimizada
- **Touch**: Suporte completo a gestos touch

## 🎯 Próximas Melhorias

- [ ] Modo offline com Service Worker
- [ ] Exportação para PDF
- [ ] Compartilhamento de missas
- [ ] Histórico de versões
- [ ] Temas personalizáveis

---

**Desenvolvido com ❤️ para a comunidade católica**

