# Documentação do Projeto: Top 10 Empresas de Rochas Ornamentais

Este projeto consiste em uma plataforma integrada para análise estratégica e mercadológica das 10 principais empresas produtoras e exportadoras de mármores, granitos e rochas ornamentais no Brasil. O sistema foi desenvolvido com uma interface web interativa de alto nível estético (Premium Luxury Theme) e um relatório de mercado detalhado.

---

## 1. Estrutura de Arquivos do Projeto

O diretório do projeto contém os seguintes componentes:

```text
top10M&G/
│
├── index.html                  # Estrutura e marcação semântica do painel
├── style.css                   # Identidade visual, animações e responsividade
├── app.js                      # Banco de dados local, lógica de filtros e Chart.js
├── relatorio_analise_top10.md  # Relatório analítico detalhado do mercado (SWOT, Tendências)
└── README.md                   # Esta documentação técnica e de uso
```

---

## 2. Guia de Uso do Painel Interativo

O painel é totalmente independente e funciona sem a necessidade de conexões com servidores locais ou instalação de dependências complexas.

### Como Iniciar:
1. Navegue até a pasta `top10M&G/`.
2. Dê um clique duplo no arquivo `index.html` para executá-lo no seu navegador de preferência.

### Recursos Disponíveis:
* **Cards Resumo (KPIs):** Apresenta indicadores consolidados sobre o volume de jazidas, mercados atingidos e quantidade de polos industriais.
* **Painel de Gráficos (Chart.js):**
  * *Gráfico de Rosca:* Demonstra a proporção geográfica das sedes industriais no Espírito Santo.
  * *Gráfico de Barras:* Representa a especialização produtiva consolidada (Quartzitos vs. Granitos vs. Mármores vs. Sintéticos).
* **Filtros Avançados em Tempo Real:** 
  * A barra de pesquisa analisa instantaneamente nomes de empresas, materiais descritos e slogans competitivos.
  * Os seletores suspensos filtram os resultados simultaneamente por **Cidade** e por **Especialidade**.
* **Matriz de Comparação:** Uma tabela dinâmica que simplifica a visualização comparativa lado a lado dos players.
* **Modal Dinâmico de Ficha Técnica:** Ao clicar em "Detalhes" em qualquer card ou linha da tabela, uma tela com efeito *glassmorphism* se abre contendo:
  * Histórico detalhado e capacidade anual da fábrica.
  * Gráfico em barra horizontal animado mostrando a distribuição real da matéria-prima operada pela empresa.
  * Relação de principais destinos internacionais e quantidade de pedreiras ativas.
* **Abas de Inteligência:** Permitem alternar rapidamente entre a **Matriz SWOT Geral**, um compilado sobre a ascensão dos **Quartzitos** e dados sobre as **Tecnologias Sustentáveis** modernas.

---

## 3. Guia do Desenvolvedor: Como Estender o Projeto

O projeto foi construído utilizando **HTML5**, **CSS3 puro (Vanilla)** e **JavaScript ES6**. Isso torna manutenções e adições de novos players extremamente simples.

### 3.1 Adicionando ou Editando Dados de Empresas
Todas as informações das empresas residem no array `companiesData` dentro do arquivo `app.js`. Cada objeto segue a seguinte estrutura:

```javascript
{
    id: "identificador_unico", // String amigável em minúsculas (Ex: "guidoni")
    rank: 1,                    // Número de 1 a 10 refletindo a posição de mercado
    name: "Nome da Empresa",
    city: "Cidade da Sede",     // Ex: "Serra", "Cachoeiro de Itapemirim", "Castelo", "São Domingos do Norte"
    founded: 1989,              // Ano de fundação
    description: "Frase curta...",
    detailedText: "Parágrafo detalhado com histórico e inovações...",
    materials: ["Tag1", "Tag2"],// Tipos de rochas (Ex: "Quartzito", "Granito", "Mármore", "Superfícies de Quartzo")
    materialShares: {           // Ponderação da produção (deve somar 100%)
        "Quartzito": 30,
        "Granito": 40,
        "Mármore": 10,
        "Superfícies de Quartzo": 20
    },
    exportMarkets: ["EUA", "Europa"], // Destinos comerciais principais
    quarries: 40,               // Quantidade estimada de pedreiras sob gestão
    highlight: "Slogan ou destaque comercial marcante...",
    capacity: "600.000 t/ano"   // Capacidade fabril descritiva
}
```
*Para inserir novas empresas, basta adicionar um novo objeto com esta mesma tipagem ao array `companiesData` e as atualizações na grade de cards, filtros e tabela ocorrerão de forma totalmente automatizada.*

### 3.2 Modificando a Identidade Visual (Cores e Temas)
Os estilos estão definidos com base em propriedades customizadas do CSS (CSS Variables) no início do arquivo `style.css`. Para alterar a atmosfera de cores (ex: de um tom dourado para um tom prata/bronze ou para um tema claro), edite as seguintes variáveis no seletor `:root`:

```css
:root {
    --bg-main: #0a0d10;              /* Fundo geral da página */
    --bg-card: rgba(22, 28, 36, 0.65);/* Transparência dos cards (Glassmorphism) */
    --gold: #d4af37;                 /* Cor luxuosa de destaque (Dourado) */
    --gold-gradient: linear-gradient(135deg, #f3e5ab 0%, #d4af37 50%, #aa7c11 100%);
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Inter', sans-serif;
}
```

### 3.3 CDN de Bibliotecas Externas
O projeto carrega recursos essenciais de forma assíncrona por meio de CDNs (Content Delivery Networks):
* **Chart.js** (Gráficos interativos): `https://cdn.jsdelivr.net/npm/chart.js`
* **FontAwesome 6** (Ícones premium): `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
* **Google Fonts** (*Outfit* para cabeçalhos e *Inter* para o corpo de texto).

*Para funcionamento offline completo, você pode baixar esses arquivos de script e folha de estilo e alterar as tags `<script>` e `<link>` correspondentes no `index.html` para caminhos relativos locais.*

---

## 4. Requisitos e Compatibilidade

* **Plataforma:** Qualquer sistema operacional (Windows, macOS, Linux).
* **Navegador:** Recomendado navegadores modernos com suporte a ES6+, CSS Grid e CSS Variables (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, Opera).
* **Conexão:** Acesso à internet é recomendado no carregamento inicial para a renderização dos ícones, fontes premium e scripts gráficos (via CDN).

---

## 5. Fontes de Dados e Processo de Atualização

### 5.1 Fontes de Referência Utilizadas
Para assegurar a precisão e a confiabilidade das informações representadas neste projeto, foram consultadas as seguintes bases de dados do setor de rochas ornamentais:
* **ABIROCHAS (Associação Brasileira da Indústria de Rochas Ornamentais):** Dados estatísticos de lavra, balanço anual da produção brasileira e consumo nacional de chapas.
* **Centrorochas (Centro Brasileiro dos Exportadores de Rochas Ornamentais):** Relatórios de balança comercial e exportação FOB (Free on Board) discriminados por estado de origem e país de destino.
* **SindiRochas/ES (Sindicato das Indústrias de Rochas Ornamentais, Cal e Calcário do ES):** Informações sobre o parque industrial capixaba, concentração de teares multifios e mapeamento de pólos fabris locais.
* **Catálogos e Portfólios Oficiais das Empresas:** Fichas de produtos, especificações físicas e mineralógicas das rochas, capacidade instalada declarada e dados de fundação das 10 corporações analisadas.
* **Brasil Mineral:** Reportagens e anuários de mineração contendo faturamentos estimados e fusões/aquisições do setor.

### 5.2 Como e Quando Atualizar este Projeto

> [!TIP]
> **Periodicidade Recomendada:** A atualização dos dados deve ser realizada **anualmente**, preferencialmente no final do primeiro trimestre de cada ano civil. É nesse período que o Centrorochas e a ABIROCHAS publicam os relatórios consolidados finais de fechamento de mercado do ano anterior.

#### Passo a Passo para Atualização:
1. **Revisão das Estatísticas Gerais (KPIs):** Acesse os relatórios estatísticos mais recentes no site do [Centrorochas](https://centrorochas.org.br/) e da [ABIROCHAS](https://abirochas.com.br/). Atualize os cards de resumo no HTML (`index.html`) se o número de países de exportação ou o volume de lavras consolidadas sofrer alterações significativas.
2. **Atualização do Banco de Dados Local (`app.js`):**
   * Localize o array `companiesData`.
   * Atualize os valores de `capacity` (capacidade fabril) e `quarries` (número de jazidas ativas estimadas) conforme declarado nos novos relatórios ou canais de Relações com Investidores (RI) das empresas.
   * Se houver mudanças na linha principal de produtos (por exemplo, se uma empresa passar a focar majoritariamente em quartzito em vez de granito clássico), ajuste os valores relativos em `materialShares`.
3. **Calibração dos Gráficos:**
   * Se um novo player de peso entrar no Top 10 substituindo outro, modifique a contagem de cidades no construtor do gráfico de rosca (`hubChartInstance`) em `app.js` na função `initCharts()`.
   * Revise a média de portfólio no gráfico de barras (`materialsChartInstance`) caso a transição setorial para quartzitos ou engineered stones se acentue ainda mais.
4. **Verificação de Links:** Garanta que os sites oficiais e catálogos das empresas continuem operacionais e com a mesma estrutura de diretório.

