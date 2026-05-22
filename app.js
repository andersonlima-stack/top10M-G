/* ==========================================================================
   DASHBOARD LOGIC: TOP 10 MARBLE & GRANITE COMPANIES IN BRAZIL
   Vanilla JS, Chart.js Integration, Filter System, Dynamic Modals
   ========================================================================== */

// 1. Full Dataset
const companiesData = [
    {
        id: "guidoni",
        rank: 1,
        name: "Grupo Guidoni",
        city: "São Domingos do Norte",
        founded: 1989,
        revenue: "R$ 2,8 bilhões",
        marketShare: 27.5,
        description: "Líder absoluto em volume de produção e exportações na América Latina. Pioneiro na fabricação de superfícies de quartzo estruturadas no Brasil.",
        detailedText: "O Grupo Guidoni iniciou suas atividades no final da década de 80 em São Domingos do Norte/ES. Hoje, é considerado um dos maiores players globais de rochas naturais. A empresa verticalizou com maestria suas operações, controlando desde a pesquisa de jazidas até o beneficiamento final de chapas clássicas e exóticas. Em 2016, a Guidoni revolucionou o mercado latino-americano ao fundar a primeira fábrica de superfícies de quartzo de alta tecnologia na região (sob a marca Topzstone), expandindo posteriormente sua capacidade produtiva com parques fabris na Espanha e nos Estados Unidos.",
        materials: ["Granito", "Quartzito", "Mármore", "Superfícies de Quartzo"],
        materialShares: {
            "Quartzito": 30,
            "Granito": 40,
            "Mármore": 10,
            "Superfícies de Quartzo": 20
        },
        exportMarkets: ["EUA", "Europa", "Oriente Médio", "Canadá", "América Latina"],
        exportMarketValues: {
            "EUA": 950,
            "Europa": 680,
            "Oriente Médio": 520,
            "Canadá": 380,
            "América Latina": 270
        },
        quarries: 40,
        highlight: "Maior produtor e exportador de rochas da América Latina; detentor da marca Topzstone.",
        capacity: "600.000 toneladas / ano"
    },
    {
        id: "zucchi",
        rank: 2,
        name: "Granito Zucchi",
        city: "Serra",
        founded: 2001,
        revenue: "R$ 1,4 bilhão",
        marketShare: 13.8,
        description: "Sinônimo de inovação digital e manufatura avançada. Parque industrial de altíssima automação focado no mercado premium global.",
        detailedText: "A Zucchi é reconhecida mundialmente pela modernização extrema de seus processos. Com sede na Serra/ES, a empresa implementou tecnologias pioneiras, como o mapeamento digital completo de cada chapa de pedra produzida, permitindo que distribuidores e designers ao redor do mundo escolham seus lotes via internet com fidelidade absoluta de cores e veios. Focada no segmento premium, a Zucchi combina a durabilidade e a beleza geológica do quartzito brasileiro com um serviço de logística de exportação impecável direcionado a projetos de grande relevância internacional.",
        materials: ["Quartzito", "Granito", "Mármore"],
        materialShares: {
            "Quartzito": 60,
            "Granito": 30,
            "Mármore": 10,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "Itália", "Canadá", "Reino Unido", "Austrália"],
        exportMarketValues: {
            "EUA": 480,
            "Itália": 260,
            "Canadá": 200,
            "Reino Unido": 240,
            "Austrália": 220
        },
        quarries: 15,
        highlight: "Digitalização de chapas por scanner HD; parque industrial ultra automatizado.",
        capacity: "350.000 m² / ano"
    },
    {
        id: "gramazini",
        rank: 3,
        name: "Gramazini",
        city: "Cachoeiro de Itapemirim",
        founded: 1992,
        revenue: "R$ 1,2 bilhão",
        marketShare: 11.8,
        description: "Uma potência de Cachoeiro de Itapemirim com forte verticalização. Dezenas de pedreiras exclusivas e centros logísticos nos EUA.",
        detailedText: "Fundada pela tradicional família Thomazini, a Gramazini construiu uma reputação sólida baseada na exclusividade de seu portfólio. Ao adquirir e operar dezenas de jazidas próprias de quartzitos exóticos e granitos em várias regiões do Brasil, a empresa garante aos seus clientes internacionais um fornecimento contínuo de materiais raros e de alta procura. Para otimizar a distribuição global, a Gramazini consolidou armazéns e estruturas logísticas diretamente no mercado americano, eliminando intermediários e atendendo prontamente a projetos comerciais de luxo.",
        materials: ["Quartzito", "Granito", "Mármore"],
        materialShares: {
            "Quartzito": 50,
            "Granito": 40,
            "Mármore": 10,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "China", "Canadá", "México", "Oriente Médio"],
        exportMarketValues: {
            "EUA": 420,
            "China": 180,
            "Canadá": 160,
            "México": 240,
            "Oriente Médio": 200
        },
        quarries: 30,
        highlight: "Exclusividade de jazidas próprias; canais logísticos diretos nos Estados Unidos.",
        capacity: "450.000 m² / ano"
    },
    {
        id: "vitoria_stone",
        rank: 4,
        name: "Vitória Stone Group",
        city: "Serra",
        founded: 2003,
        revenue: "R$ 950 milhões",
        marketShare: 9.3,
        description: "Referência no segmento de rochas de ultra luxo e translúcidas. Controle de qualidade vertical do bloco bruto até o acabamento fino.",
        detailedText: "O Vitória Stone Group posiciona-se no topo da pirâmide de sofisticação do mercado de pedras naturais. A empresa especializou-se na extração e comercialização de quartzitos translúcidos (cristais puros) e rochas com padrões visuais complexos que se assemelham a obras de arte. Com um processo produtivo verticalizado que interliga mineração de alto padrão, polimento tecnológico com resinas premium e exportação direta, o grupo exporta para grandes estúdios de arquitetura globais e mantém um showroom sofisticado em Verona, na Itália, o berço histórico do mármore.",
        materials: ["Quartzito", "Granito", "Mármore"],
        materialShares: {
            "Quartzito": 70,
            "Granito": 20,
            "Mármore": 10,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "Europa", "Itália", "Oriente Médio", "Ásia"],
        exportMarketValues: {
            "EUA": 320,
            "Europa": 200,
            "Itália": 180,
            "Oriente Médio": 150,
            "Ásia": 100
        },
        quarries: 20,
        highlight: "Líder em pedras translúcidas retroiluminadas; showroom internacional próprio na Itália.",
        capacity: "300.000 m² / ano"
    },
    {
        id: "decolores",
        rank: 5,
        name: "Decolores",
        city: "Cachoeiro de Itapemirim",
        founded: 2000,
        revenue: "R$ 820 milhões",
        marketShare: 8.1,
        description: "Pioneira e autoridade máxima na difusão dos quartzitos de grife. Acabamento espelhado e resinagem tecnológica impecáveis.",
        detailedText: "A Decolores desempenhou um papel vital na transformação do mercado de quartzito brasileiro em uma marca de desejo internacional. Sediada em Cachoeiro de Itapemirim, a empresa concentrou seus investimentos em tecnologias de polimento e linhas de resinagem a vácuo de alta precisão. Ao garantir que materiais icônicos como os quartzitos Taj Mahal e Da Vinci atinjam uma cura estrutural e brilho sem paralelos no mercado, a Decolores conquistou os corações de designers de interiores focados em superfícies luxuosas de alto tráfego.",
        materials: ["Quartzito", "Mármore", "Granito"],
        materialShares: {
            "Quartzito": 75,
            "Granito": 15,
            "Mármore": 10,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "Canadá", "Europa", "América Latina", "Ásia"],
        exportMarketValues: {
            "EUA": 280,
            "Canadá": 140,
            "Europa": 150,
            "América Latina": 160,
            "Ásia": 90
        },
        quarries: 12,
        highlight: "Referência absoluta no quartzito Taj Mahal; pioneirismo no tratamento fino de superfícies.",
        capacity: "280.000 m² / ano"
    },
    {
        id: "brasigran",
        rank: 6,
        name: "Brasigran",
        city: "Serra",
        founded: 1994,
        revenue: "R$ 780 milhões",
        marketShare: 7.7,
        description: "Fusão de extração pesada e alta arquitetura. Reconhecida pelas parcerias criativas com grandes designers e sustentabilidade fabril.",
        detailedText: "Pertencente ao consolidado grupo de mineração Corcovado, a Brasigran combina a capacidade de extração em larga escala de blocos minerais com um olhar apurado para as tendências de design de interiores. A empresa destaca-se pela comercialização de granitos exóticos únicos (como o quartzito verde Victoria Regia). Adicionalmente, a Brasigran investe massivamente em sustentabilidade operacional, empregando tratamento de resíduos, captação pluvial e sistemas eficientes de circuito de água em seu pátio de corte na Serra/ES.",
        materials: ["Granito", "Quartzito", "Mármore"],
        materialShares: {
            "Quartzito": 40,
            "Granito": 50,
            "Mármore": 10,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "Itália", "Canadá", "Reino Unido", "Oriente Médio"],
        exportMarketValues: {
            "EUA": 270,
            "Itália": 120,
            "Canadá": 130,
            "Reino Unido": 140,
            "Oriente Médio": 120
        },
        quarries: 18,
        highlight: "Destaque no design assinado com pedras naturais; sistemas ecológicos avançados de lavagem.",
        capacity: "320.000 m² / ano"
    },
    {
        id: "magban",
        rank: 7,
        name: "Magban",
        city: "Cachoeiro de Itapemirim",
        founded: 1986,
        revenue: "R$ 720 milhões",
        marketShare: 7.1,
        description: "Tradicional player capixaba com presença comercial global em mais de 50 países. Forte atuação em mármores dolomíticos.",
        detailedText: "A Magban é um dos pilares históricos de Cachoeiro de Itapemirim. Desde meados dos anos 80, a empresa estruturou um modelo comercial altamente eficiente focado na exportação global de mármores dolomíticos nobres e quartzitos de padrões decorativos. Com uma rede extensa de jazidas ativas pelo país, a Magban mantém uma constância admirável de padrões de chapas, sendo uma escolha segura para distribuidores internacionais que buscam consistência cromática em grande escala.",
        materials: ["Mármore", "Quartzito", "Granito"],
        materialShares: {
            "Quartzito": 45,
            "Granito": 25,
            "Mármore": 30,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "Europa", "Oriente Médio", "Ásia", "África"],
        exportMarketValues: {
            "EUA": 250,
            "Europa": 180,
            "Oriente Médio": 140,
            "Ásia": 100,
            "África": 50
        },
        quarries: 25,
        highlight: "Exportação consolidada para 50+ países; portfólio robusto de mármores dolomíticos de alta dureza.",
        capacity: "380.000 m² / ano"
    },
    {
        id: "bramagran",
        rank: 8,
        name: "Bramagran",
        city: "Castelo",
        founded: 1993,
        revenue: "R$ 680 milhões",
        marketShare: 6.7,
        description: "Gigante industrial de Castelo/ES. Foco em processamento de grandes volumes e alta capacidade de estocagem de blocos.",
        detailedText: "Sediada no município de Castelo/ES, a Bramagran é reconhecida pelo porte colossal de suas instalações fabris. A empresa conta com um parque de teares multifios diamantados de última geração ajustado para produzir volumes maciços de chapas com rapidez exemplar. O amplo pátio de estocagem de blocos brutos permite que a Bramagran atenda a imensas demandas de obras de infraestrutura e comerciais no mercado nacional e internacional, sem oscilações de fornecimento.",
        materials: ["Granito", "Quartzito", "Mármore"],
        materialShares: {
            "Quartzito": 35,
            "Granito": 55,
            "Mármore": 10,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "Oriente Médio", "Europa", "América Latina", "China"],
        exportMarketValues: {
            "EUA": 240,
            "Oriente Médio": 130,
            "Europa": 100,
            "América Latina": 120,
            "China": 90
        },
        quarries: 22,
        highlight: "Alta produtividade física e capacidade de fornecimento contínuo para megaprojetos corporativos.",
        capacity: "500.000 m² / ano"
    },
    {
        id: "marbrasa",
        rank: 9,
        name: "Marbrasa",
        city: "Cachoeiro de Itapemirim",
        founded: 1969,
        revenue: "R$ 450 milhões",
        marketShare: 4.4,
        description: "Uma das pioneiras do setor no Brasil. Famosa pela extração clássica do Mármore Branco Cachoeiro e obras históricas.",
        detailedText: "A Marbrasa é uma das marcas mais antigas e veneradas no cenário de rochas ornamentais brasileiro. Fundada no final da década de 60, a empresa liderou a exploração e a popularização das jazidas locais do icônico Mármore Branco Cachoeiro, rocha que revestiu edifícios governamentais, hotéis e residências de prestígio por todo o Brasil. Ao longo das décadas, a Marbrasa soube modernizar suas pedreiras clássicas e introduzir quartzitos exóticos de luxo ao portfólio, aliando a rica história de sua fundação às demandas do século XXI.",
        materials: ["Mármore", "Quartzito", "Granito"],
        materialShares: {
            "Mármore": 50,
            "Quartzito": 30,
            "Granito": 20,
            "Superfícies de Quartzo": 0
        },
        exportMarkets: ["EUA", "Europa", "Mercado Interno (Brasil)", "América Latina"],
        exportMarketValues: {
            "EUA": 160,
            "Europa": 90,
            "Mercado Interno (Brasil)": 120,
            "América Latina": 80
        },
        quarries: 15,
        highlight: "Proprietária das pedreiras originais do Mármore Branco Cachoeiro; 50+ anos de tradição.",
        capacity: "250.000 m² / ano"
    },
    {
        id: "cosentino_latina",
        rank: 10,
        name: "Cosentino Latina",
        city: "Serra",
        founded: 2002,
        revenue: "R$ 380 milhões",
        marketShare: 3.7,
        description: "Hub industrial da líder global espanhola Cosentino. Tecnologia avançada de proteção molecular anti-mancha (marca Sensa).",
        detailedText: "Instalada na Serra/ES, a Cosentino Latina é o coração fabril de pedras naturais do gigantesco Grupo Cosentino (multinacional espanhola líder de superfícies). A unidade serve como ponto de atração estratégica para mineração e exportação mundial de rochas brasileiras. O grande destaque da Latina é a fabricação da renomada linha Sensa: granitos e quartzitos naturais que recebem um exclusivo tratamento nanotecnológico anti-manchas nos laboratórios da fábrica. Esse selo molecular impede a penetração de gorduras e ácidos domésticos comuns, oferecendo pedras naturais que não necessitam de manutenção periódica.",
        materials: ["Granito", "Quartzito", "Superfícies de Quartzo"],
        materialShares: {
            "Granito": 60,
            "Quartzito": 30,
            "Superfícies de Quartzo": 10
        },
        exportMarkets: ["Europa (Sede Global)", "EUA", "Ásia-Pacífico", "Canadá", "América Latina"],
        exportMarketValues: {
            "Europa (Sede Global)": 180,
            "EUA": 120,
            "Ásia-Pacífico": 40,
            "Canadá": 25,
            "América Latina": 15
        },
        quarries: 10,
        highlight: "Detentora da tecnologia protetiva Sensa; integração logística com canais multinacionais da Cosentino.",
        capacity: "400.000 m² / ano"
    }
];

// --- Historical metrics generator and helpers ---
// We synthesize per-year revenue and marketShare series from base values so
// the "Período (Valores & %)" filter can compute averages across a range.
const metricYearDefaultMin = 2018;
const metricYearDefaultMax = 2025;
let metricYearMin = metricYearDefaultMin;
let metricYearMax = metricYearDefaultMax;
let metricAgg = 'average'; // 'average' | 'sum' | 'last'

function aggregateMetrics(company, ymin, ymax, method) {
    const yMin = Math.max(2015, Math.min(ymin, ymax));
    const yMax = Math.min(2026, Math.max(ymin, ymax));
    const years = [];
    for (let y = yMin; y <= yMax; y++) years.push(generateYearlyMetrics(company, y));

    if (years.length === 0) return { revenue: parseRevenueToNumber(company.revenue), marketShare: company.marketShare };

    if (method === 'average') {
        const avgRev = years.reduce((s, v) => s + v.revenue, 0) / years.length;
        const avgShare = years.reduce((s, v) => s + v.marketShare, 0) / years.length;
        return { revenue: avgRev, marketShare: avgShare };
    }

    if (method === 'sum') {
        const sumRev = years.reduce((s, v) => s + v.revenue, 0);
        const avgShare = years.reduce((s, v) => s + v.marketShare, 0) / years.length;
        return { revenue: sumRev, marketShare: avgShare };
    }

    // last
    const last = years[years.length - 1];
    return { revenue: last.revenue, marketShare: last.marketShare };
}

function parseRevenueToNumber(revStr) {
    if (!revStr) return 0;
    // Extract numbers like 'R$ 2,8 bilhões' or 'R$ 820 milhões'
    const s = revStr.replace(/[R$\s\.]/g, '').replace(',', '.').toLowerCase();
    if (s.includes('bil')) {
        return parseFloat(s.replace(/[^0-9\.]/g, '')) * 1e9;
    }
    if (s.includes('milhão') || s.includes('milhoes') || s.includes('milhões') || s.includes('milhao')) {
        return parseFloat(s.replace(/[^0-9\.]/g, '')) * 1e6;
    }
    return parseFloat(s.replace(/[^0-9\.]/g, '')) || 0;
}

function formatCurrencyBR(n) {
    if (isNaN(n)) return 'R$ 0,00';
    if (n >= 1e9) return `R$ ${(n / 1e9).toFixed(2)} bi`;
    if (n >= 1e6) return `R$ ${(n / 1e6).toFixed(2)} mi`;
    const opts = { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 };
    return new Intl.NumberFormat('pt-BR', opts).format(n);
}

function generateYearlyMetrics(company, year) {
    // Deterministic synthesis based on rank and base metrics
    const baseRev = parseRevenueToNumber(company.revenue);
    const baseShare = company.marketShare || 0;

    // Use a simple trend: larger players grow slightly, smaller oscillate
    const ageFactor = (year - 2015) / 10; // trend factor
    const rankFactor = (11 - company.rank) / 10; // higher for top ranks

    // Revenue: base ± up to 15% depending on year and rank
    const revVariation = 1 + (Math.sin(year + company.rank) * 0.06) + (ageFactor * 0.02) + (rankFactor * 0.02);
    const revenueYear = Math.max(0, baseRev * revVariation);

    // Market share: small oscillation around baseShare
    const shareVariation = baseShare * (1 + (Math.cos(year + company.rank) * 0.04) - (ageFactor * 0.005));
    const marketShareYear = Math.max(0, Math.min(100, shareVariation));

    return { year, revenue: revenueYear, marketShare: marketShareYear };
}

function computeMetricsInRange(company, ymin, ymax) {
    const yMin = Math.max(2015, Math.min(ymin, ymax));
    const yMax = Math.min(2026, Math.max(ymin, ymax));
    const values = [];
    for (let y = yMin; y <= yMax; y++) {
        values.push(generateYearlyMetrics(company, y));
    }
    if (values.length === 0) return { revenue: parseRevenueToNumber(company.revenue), marketShare: company.marketShare };
    const avgRev = values.reduce((s, v) => s + v.revenue, 0) / values.length;
    const avgShare = values.reduce((s, v) => s + v.marketShare, 0) / values.length;
    return { revenue: avgRev, marketShare: avgShare };
}

// 2. Chart Configurations
let hubChartInstance = null;
let materialsChartInstance = null;

function initCharts() {
    // Geographic Hubs distribution: Serra (4), Cachoeiro (4), Castelo (1), S. D. Norte (1)
    const hubCtx = document.getElementById('hubChart').getContext('2d');
    
    // Check if Chart.js is loaded
    if (typeof Chart !== 'undefined') {
        hubChartInstance = new Chart(hubCtx, {
            type: 'doughnut',
            data: {
                labels: ['Serra', 'Cachoeiro de Itapemirim', 'Castelo', 'São Domingos do Norte'],
                datasets: [{
                    data: [4, 4, 1, 1],
                    backgroundColor: [
                        '#d4af37', // Gold
                        '#1e293b', // Deep Slate
                        '#475569', // Muted Grey Blue
                        '#8a7021'  // Darker Gold
                    ],
                    borderColor: 'rgba(212, 175, 55, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#a0aec0',
                            font: {
                                family: 'Inter',
                                size: 11
                            },
                            padding: 15
                        }
                    }
                },
                cutout: '65%'
            }
        });

        // Material Specialization Pondered chart
        const materialsCtx = document.getElementById('materialsChart').getContext('2d');
        
        // Pondered material shares: Quartzite ~47.5%, Granite ~37.5%, Marble ~12%, Synthetic ~3%
        materialsChartInstance = new Chart(materialsCtx, {
            type: 'bar',
            data: {
                labels: ['Quartzitos', 'Granitos', 'Mármores', 'Sintéticos / Quartzo'],
                datasets: [{
                    label: 'Ponderação de Foco Produtivo (%)',
                    data: [48, 37, 12, 3],
                    backgroundColor: [
                        'rgba(212, 175, 55, 0.85)', // Gold with opacity
                        'rgba(71, 85, 105, 0.85)',  // Slate with opacity
                        'rgba(148, 163, 184, 0.85)', // Silver/Muted grey
                        'rgba(212, 175, 55, 0.4)'    // Low opacity gold
                    ],
                    borderColor: '#d4af37',
                    borderWidth: 1,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: '#a0aec0', font: { family: 'Inter' } }
                    },
                    y: {
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#a0aec0', font: { family: 'Inter' } },
                        max: 60
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

// 3. Render Functions
function getRankMedalHTML(rank) {
    if (rank === 1) return `<div class="company-rank rank-gold" title="1º Lugar"><i class="fa-solid fa-crown"></i></div>`;
    if (rank === 2) return `<div class="company-rank rank-silver" title="2º Lugar"><i class="fa-solid fa-medal"></i></div>`;
    if (rank === 3) return `<div class="company-rank rank-bronze" title="3º Lugar"><i class="fa-solid fa-medal"></i></div>`;
    return `<div class="company-rank">${rank}º</div>`;
}

function renderGrid(companies) {
    const grid = document.getElementById('companiesGrid');
    grid.innerHTML = '';
    
    if (companies.length === 0) {
        grid.innerHTML = `
            <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--gold); margin-bottom: 1rem;"></i>
                <h3>Nenhuma empresa localizada</h3>
                <p style="color: var(--color-text-secondary); margin-top: 0.5rem;">Tente ajustar seus termos de pesquisa ou filtros aplicados.</p>
            </div>
        `;
        return;
    }
    
    companies.forEach(company => {
        const card = document.createElement('div');
        card.className = 'company-card';
        card.setAttribute('data-id', company.id);
        
        // Build material tags HTML
        let tagsHTML = '';
        company.materials.forEach((mat, index) => {
            const isFirst = index === 0;
            const selClass = activeMaterials.has(mat) ? 'selected' : '';
            tagsHTML += `<span class="stone-tag ${isFirst ? 'tag-primary' : ''} ${selClass}">${mat}</span>`;
        });

        // Main material share %
        const mainMaterial = company.materials[0];
        const mainShare = company.materialShares[mainMaterial] || 0;

        // Aggregated metrics for selected metric year range
        const agg = aggregateMetrics(company, metricYearMin, metricYearMax, metricAgg);
        const revenueDisplay = formatCurrencyBR(agg.revenue);
        const marketShareDisplay = agg.marketShare.toFixed(1);
        
        card.innerHTML = `
            <div>
                <div class="company-card-header">
                    <div class="company-card-title">
                        <h3>${company.name}</h3>
                        <span><i class="fa-solid fa-location-dot"></i> ${company.city}, ES</span>
                    </div>
                    ${getRankMedalHTML(company.rank)}
                </div>
                
                <p class="company-desc">${company.description}</p>

                <!-- KPI Stats Row -->
                <div class="card-kpi-row">
                    <div class="card-kpi-item">
                        <i class="fa-solid fa-sack-dollar"></i>
                        <div>
                            <span class="card-kpi-label">Faturamento Est.</span>
                            <span class="card-kpi-value">${revenueDisplay}</span>
                        </div>
                    </div>
                    <div class="card-kpi-item">
                        <i class="fa-solid fa-chart-pie"></i>
                        <div>
                            <span class="card-kpi-label">Market Share</span>
                            <span class="card-kpi-value">${marketShareDisplay}%</span>
                        </div>
                    </div>
                    <div class="card-kpi-item">
                        <i class="fa-solid fa-mountain"></i>
                        <div>
                            <span class="card-kpi-label">Jazidas</span>
                            <span class="card-kpi-value">${company.quarries}</span>
                        </div>
                    </div>
                </div>

                <!-- Mini progress bar for main material -->
                <div class="card-material-bar">
                    <div class="card-material-bar-header">
                        <span class="card-material-bar-label"><i class="fa-solid fa-gem"></i> ${mainMaterial}</span>
                        <span class="card-material-bar-pct">${mainShare}% do portfólio</span>
                    </div>
                    <div class="card-mini-bar-bg">
                        <div class="card-mini-bar-fill" style="width: ${mainShare}%"></div>
                    </div>
                </div>
                
                <div class="company-tags">
                    ${tagsHTML}
                </div>
            </div>
            
            <div class="company-footer">
                <div class="company-kpi-brief">
                    <span>Fundada em</span>
                    <strong>${company.founded}</strong>
                </div>
                <button class="btn btn-primary btn-view-details" data-id="${company.id}">
                    Detalhes <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Bind click events on new buttons
    document.querySelectorAll('.btn-view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-id');
            openModal(id);
        });
    });

    // Make material tags clickable and toggle active filter
    document.querySelectorAll('.company-card').forEach(card => {
        card.querySelectorAll('.stone-tag').forEach(tagEl => {
            tagEl.style.cursor = 'pointer';
            tagEl.addEventListener('click', (e) => {
                const mat = tagEl.textContent.trim();
                if (activeMaterials.has(mat)) {
                    activeMaterials.delete(mat);
                    tagEl.classList.remove('selected');
                } else {
                    activeMaterials.add(mat);
                    tagEl.classList.add('selected');
                }
                applyFilters();
            });
        });
    });
}

function renderTable(companies) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    if (companies.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 2rem;">Nenhum dado disponível na matriz com os filtros atuais.</td>
            </tr>
        `;
        return;
    }
    
    companies.forEach(company => {
        const mainMat = company.materials[0];
        const mainShare = company.materialShares[mainMat] || 0;
        let rankCell = '';
        if (company.rank === 1) rankCell = `<span class="table-rank rank-gold"><i class="fa-solid fa-crown"></i> 1º</span>`;
        else if (company.rank === 2) rankCell = `<span class="table-rank rank-silver"><i class="fa-solid fa-medal"></i> 2º</span>`;
        else if (company.rank === 3) rankCell = `<span class="table-rank rank-bronze"><i class="fa-solid fa-medal"></i> 3º</span>`;
        else rankCell = `<span class="table-rank">${company.rank}º</span>`;

        // Use aggregated metrics for table display
        const agg = aggregateMetrics(company, metricYearMin, metricYearMax, metricAgg);
        const revenueDisplay = formatCurrencyBR(agg.revenue);
        const marketShareDisplay = agg.marketShare.toFixed(1);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rankCell}</td>
            <td style="font-weight: 700; color: var(--color-text-primary);">${company.name}</td>
            <td><i class="fa-solid fa-city" style="color: var(--gold); font-size: 0.8rem; margin-right: 0.3rem;"></i> ${company.city}</td>
            <td>
                <div class="table-revenue">${revenueDisplay}</div>
            </td>
            <td>
                <div class="table-share-cell">
                    <span class="table-share-pct">${marketShareDisplay}%</span>
                    <div class="table-mini-bar-bg">
                        <div class="table-mini-bar-fill" style="width: ${agg.marketShare * 3.6}%"></div>
                    </div>
                </div>
            </td>
            <td style="font-size: 0.8rem; color: var(--color-text-secondary);">
                <span class="stone-tag tag-primary">${mainMat}</span> ${mainShare}%
            </td>
            <td>${company.founded}</td>
            <td>
                <button class="btn btn-outline btn-table-action" data-id="${company.id}">
                    <i class="fa-solid fa-eye"></i> Analisar
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    
    // Bind click events on table action buttons
    document.querySelectorAll('.btn-table-action').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            openModal(id);
        });
    });
}

// 4. Modal Handler
function openModal(id) {
    const company = companiesData.find(c => c.id === id);
    if (!company) return;
    
    const modalBody = document.getElementById('modalBody');
    
    // Create markets list with ranking and values
    const marketsWithValues = company.exportMarkets.map(m => ({
        name: m,
        value: company.exportMarketValues ? company.exportMarketValues[m] || 0 : 0
    })).sort((a, b) => b.value - a.value);
    
    const marketsHTML = marketsWithValues.map((m, idx) => `<li><i class="fa-solid fa-circle-check" style="color: var(--gold); margin-right: 0.4rem;"></i> <strong>#${idx + 1}</strong> ${m.name} <span style="color: var(--gold); font-weight: 600;">R$ ${m.value}M</span></li>`).join('');
    
    // Generate shares bars HTML
    let barsHTML = '';
    for (const [material, percentage] of Object.entries(company.materialShares)) {
        if (percentage > 0) {
            barsHTML += `
                <div class="bar-item">
                    <div class="bar-label-row">
                        <span>${material}</span>
                        <span>${percentage}%</span>
                    </div>
                    <div class="bar-bg">
                        <div class="bar-fill" id="bar-${company.id}-${material.replace(/\s+/g, '')}" style="width: 0%"></div>
                    </div>
                </div>
            `;
        }
    }
    
    modalBody.innerHTML = `
        <div class="modal-header-section">
            <div class="modal-title">
                <h2>${company.name}</h2>
                <p><i class="fa-solid fa-award"></i> Posição #${company.rank} no Top 10 Nacional</p>
            </div>
            <span class="badge badge-gold"><i class="fa-solid fa-building"></i> Fundada em ${company.founded}</span>
        </div>
        
        <div class="modal-meta-grid">
            <div class="modal-meta-item">
                <i class="fa-solid fa-map-location-dot"></i>
                <div>
                    <div class="meta-label">Localização (ES)</div>
                    <div class="meta-value">${company.city}</div>
                </div>
            </div>
            
            <div class="modal-meta-item">
                <i class="fa-solid fa-industry"></i>
                <div>
                    <div class="meta-label">Capacidade Industrial</div>
                    <div class="meta-value">${company.capacity}</div>
                </div>
            </div>
            
            <div class="modal-meta-item">
                <i class="fa-solid fa-mountain"></i>
                <div>
                    <div class="meta-label">Jazidas Próprias</div>
                    <div class="meta-value">${company.quarries} pedreiras</div>
                </div>
            </div>
            
            <div class="modal-meta-item">
                <i class="fa-solid fa-rocket"></i>
                <div>
                    <div class="meta-label">Foco Comercial</div>
                    <div class="meta-value">${company.materials[0]}s</div>
                </div>
            </div>
        </div>
        
        <div class="modal-text-block">
            <h4>Perfil Operacional &amp; Análise</h4>
            <p>${company.detailedText}</p>
        </div>
        
        <div class="modal-text-block" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1.2rem;">
            <h4>Destaque Competitivo</h4>
            <p style="color: var(--gold); font-weight: 500; font-style: italic;">"${company.highlight}"</p>
        </div>
        
        <div class="modal-materials-panel">
            <div>
                <h4>Distribuição do Portfólio</h4>
                <div class="material-bars">
                    ${barsHTML}
                </div>
            </div>
            
            <div>
                <h4>Principais Mercados Externos</h4>
                <ul class="spec-list" style="margin-top: 0.5rem;">
                    ${marketsHTML}
                </ul>
            </div>
        </div>
        
        <div style="margin-top:1rem; border-top:1px solid rgba(255,255,255,0.04); padding-top:1rem;">
            <h4>Evolução no Período Selecionado</h4>
            <div style="height:260px;">
                <canvas id="modalSeriesChart"></canvas>
            </div>
        </div>
    `;
    
    // Show overlay
    const overlay = document.getElementById('companyModal');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
    
    // Animate bars (timeout so render completes first)
    setTimeout(() => {
        for (const [material, percentage] of Object.entries(company.materialShares)) {
            if (percentage > 0) {
                const fillBar = document.getElementById(`bar-${company.id}-${material.replace(/\s+/g, '')}`);
                if (fillBar) {
                    fillBar.style.width = `${percentage}%`;
                }
            }
        }
    }, 50);

    // Build time-series chart for this company using selected metric years & aggregation
    setTimeout(() => {
        const years = [];
        const revs = [];
        const shares = [];
        for (let y = metricYearMin; y <= metricYearMax; y++) {
            const m = generateYearlyMetrics(company, y);
            years.push(String(y));
            revs.push(Math.round(m.revenue / 1000000)); // millions for readability
            shares.push(Number(m.marketShare.toFixed(2)));
        }

        const ctx = document.getElementById('modalSeriesChart').getContext('2d');
        if (typeof window.modalSeriesChart !== 'undefined' && window.modalSeriesChart) {
            window.modalSeriesChart.destroy();
        }

        window.modalSeriesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Faturamento (R$ milhões)',
                        data: revs,
                        yAxisID: 'y',
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212,175,55,0.12)',
                        tension: 0.25
                    },
                    {
                        label: 'Market Share (%)',
                        data: shares,
                        yAxisID: 'y1',
                        borderColor: '#93c5fd',
                        backgroundColor: 'rgba(147,197,253,0.08)',
                        tension: 0.25
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        ticks: { color: '#f5f6f8' },
                        title: { display: true, text: 'R$ milhões', color: '#f5f6f8' }
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        ticks: { color: '#a0aec0' },
                        grid: { drawOnChartArea: false },
                        title: { display: true, text: '% Market Share', color: '#a0aec0' }
                    }
                },
                plugins: { legend: { labels: { color: '#a0aec0' } } }
            }
        });
    }, 120);
}

function closeModal() {
    const overlay = document.getElementById('companyModal');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scroll
}

// 5. Filter Engine Logic with Sorting
let currentSortBy = 'rank';
let sortReversed = false;

const sortLabels = {
    'rank': 'Ranking (Padrão)',
    'revenue': 'Faturamento (Maior)',
    'marketShare': 'Market Share (%)',
    'quarries': 'Jazidas (Maior)',
    'name': 'Nome (A-Z)',
    'founded': 'Ano de Fundação (Mais Novo)'
};

function updateSortLabel() {
    const label = document.getElementById('activeSortLabel');
    const direction = sortReversed ? '↓' : '↑';
    label.textContent = `${sortLabels[currentSortBy]} ${direction}`;
}

// Keep last filtered & sorted list for export
let lastFiltered = companiesData.slice();

// Active material filters when user clicks material tags
const activeMaterials = new Set();

function exportFilteredToCSV() {
    try {
        const rows = [];
        const header = ['Rank','Nome','Cidade','Fundação','Faturamento (agregado)','MarketShare (agregado %)','Jazidas','Materiais','Mercados','Capacidade'];
        rows.push(header);
        lastFiltered.forEach(c => {
            const agg = aggregateMetrics(c, metricYearMin, metricYearMax, metricAgg);
            const revenueStr = Math.round(agg.revenue);
            const msStr = agg.marketShare.toFixed(2);
            rows.push([
                c.rank,
                c.name,
                c.city,
                c.founded,
                revenueStr,
                msStr,
                c.quarries,
                c.materials.join('; '),
                c.exportMarkets.join('; '),
                c.capacity
            ]);
        });

        const csvContent = rows.map(r => r.map(cell => '"' + String(cell).replace(/"/g,'""') + '"').join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const ts = new Date().toISOString().replace(/[:.]/g,'-');
        a.download = `top10_filtered_${ts}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error('Erro ao exportar CSV', err);
        alert('Falha ao exportar CSV. Veja console para detalhes.');
    }
}

async function recordDemoGIF() {
    const btn = document.getElementById('btnRecordDemo');
    if (!window.html2canvas || !window.GIF) {
        alert('Dependências de captura não carregadas (html2canvas / gif.js).');
        return;
    }
    btn.classList.add('recording');
    btn.textContent = ' Gravando...';

    const container = document.querySelector('main.container');
    const gif = new GIF({ workers: 2, quality: 10, workerScript: 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js' });

    // Sequence: change sort, change aggregation, change metric years, open modal
    const states = [];
    states.push(() => { document.getElementById('sortBy').value = 'revenue'; applyFilters(); });
    states.push(() => { document.getElementById('metricAgg').value = 'sum'; metricAgg = 'sum'; applyFilters(); });
    states.push(() => { document.getElementById('valueYearMin').value = String(Math.max(metricYearDefaultMin, metricYearDefaultMin)); document.getElementById('valueYearMax').value = String(metricYearDefaultMax); applyFilters(); });
    states.push(() => { /* open first modal */ const first = document.querySelector('.btn-view-details'); if (first) first.click(); });

    for (let i = 0; i < states.length; i++) {
        states[i]();
        // capture a few frames after each state
        for (let f = 0; f < 6; f++) {
            // eslint-disable-next-line no-await-in-loop
            const canvas = await html2canvas(container, { backgroundColor: null, scale: 1 });
            gif.addFrame(canvas, { delay: 200 });
        }
    }

    gif.on('finished', function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'top10_demo.gif';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        btn.classList.remove('recording');
        btn.innerHTML = '<i class="fa-solid fa-video"></i> Gravar Demo (GIF)';
        // close modal if opened
        const overlay = document.getElementById('companyModal');
        overlay.classList.remove('active');
    });

    gif.render();
}

function sortCompanies(companies, sortBy) {
    const sorted = [...companies];
    
    switch(sortBy) {
        case 'revenue':
            sorted.sort((a, b) => {
                const revenueA = aggregateMetrics(a, metricYearMin, metricYearMax, metricAgg).revenue;
                const revenueB = aggregateMetrics(b, metricYearMin, metricYearMax, metricAgg).revenue;
                return sortReversed ? revenueA - revenueB : revenueB - revenueA;
            });
            break;
        case 'marketShare':
            sorted.sort((a, b) => {
                const msa = aggregateMetrics(a, metricYearMin, metricYearMax, metricAgg).marketShare;
                const msb = aggregateMetrics(b, metricYearMin, metricYearMax, metricAgg).marketShare;
                return sortReversed ? msa - msb : msb - msa;
            });
            break;
        case 'quarries':
            sorted.sort((a, b) => sortReversed ? a.quarries - b.quarries : b.quarries - a.quarries);
            break;
        case 'name':
            sorted.sort((a, b) => {
                const result = a.name.localeCompare(b.name, 'pt-BR');
                return sortReversed ? -result : result;
            });
            break;
        case 'founded':
            sorted.sort((a, b) => sortReversed ? a.founded - b.founded : b.founded - a.founded);
            break;
        case 'rank':
        default:
            sorted.sort((a, b) => sortReversed ? b.rank - a.rank : a.rank - b.rank);
            break;
    }
    
    return sorted;
}

function updateResultsCount(count) {
    const countEl = document.getElementById('resultsCount');
    const plural = count !== 1 ? 'empresas' : 'empresa';
    countEl.innerHTML = `<i class="fa-solid fa-list"></i> ${count} ${plural} encontrada${count !== 1 ? 's' : ''}`;
}

function applyFilters() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const city = document.getElementById('filterCity').value;
    const material = document.getElementById('filterMaterial').value;
    const yearMin = parseInt(document.getElementById('filterYearMin').value) || 1960;
    const yearMax = parseInt(document.getElementById('filterYearMax').value) || 2025;
    // Metric years (for values and % aggregation)
    const vYearMin = parseInt(document.getElementById('valueYearMin').value) || metricYearDefaultMin;
    const vYearMax = parseInt(document.getElementById('valueYearMax').value) || metricYearDefaultMax;
    metricYearMin = Math.min(vYearMin, vYearMax);
    metricYearMax = Math.max(vYearMin, vYearMax);
    currentSortBy = document.getElementById('sortBy').value;
    
    const filtered = companiesData.filter(company => {
        // Query search
        const matchesQuery = company.name.toLowerCase().includes(query) ||
                             company.materials.some(m => m.toLowerCase().includes(query)) ||
                             company.description.toLowerCase().includes(query) ||
                             company.highlight.toLowerCase().includes(query);
                             
        // City match
        const matchesCity = city === 'all' || company.city === city;
        
        // Material match: consider dropdown *and* activeMaterials (clicked tags)
        let matchesMaterial = false;
        if (activeMaterials.size > 0) {
            // If user clicked tags, show companies that contain ANY of the selected materials
            matchesMaterial = company.materials.some(m => activeMaterials.has(m));
        } else {
            matchesMaterial = material === 'all' || company.materials.includes(material);
        }
        
        // Year range match
        const matchesYear = company.founded >= yearMin && company.founded <= yearMax;
        
        return matchesQuery && matchesCity && matchesMaterial && matchesYear;
    });
    
    const sorted = sortCompanies(filtered, currentSortBy);
    lastFiltered = sorted.slice();
    updateSortLabel();
    updateResultsCount(sorted.length);
    renderGrid(sorted);
    renderTable(sorted);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('filterCity').value = 'all';
    document.getElementById('filterMaterial').value = 'all';
    document.getElementById('filterYearMin').value = '1960';
    document.getElementById('filterYearMax').value = '2025';
    document.getElementById('valueYearMin').value = String(metricYearDefaultMin);
    document.getElementById('valueYearMax').value = String(metricYearDefaultMax);
    document.getElementById('sortBy').value = 'rank';
    currentSortBy = 'rank';
    sortReversed = false;
    
    const toggleBtn = document.getElementById('btnSortToggle');
    toggleBtn.classList.remove('reversed');
    
    updateSortLabel();
    updateResultsCount(companiesData.length);
    // Clear any active material tag selections
    activeMaterials.clear();
    renderGrid(companiesData);
    renderTable(companiesData);
}

// 6. Live Rates Fetcher (Satisfaz o requisito de "Atualizar de hora em hora")
async function fetchLiveRates() {
    const usdRateEl = document.getElementById('usdRate');
    const usdPctEl = document.getElementById('usdPct');
    const eurRateEl = document.getElementById('eurRate');
    const eurPctEl = document.getElementById('eurPct');
    const timestampEl = document.getElementById('ratesTimestamp');
    
    if (!usdRateEl || !eurRateEl) return;
    
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        if (!response.ok) throw new Error('Falha na resposta da API');
        const data = await response.json();
        
        // USD Data
        const usdRate = parseFloat(data.USDBRL.bid);
        const usdPct = parseFloat(data.USDBRL.pctChange);
        usdRateEl.textContent = `R$ ${usdRate.toFixed(2)}`;
        usdPctEl.textContent = `${usdPct >= 0 ? '+' : ''}${usdPct.toFixed(2)}%`;
        usdPctEl.className = 'rate-pct ' + (usdPct >= 0 ? 'up' : 'down');
        
        // EUR Data
        const eurRate = parseFloat(data.EURBRL.bid);
        const eurPct = parseFloat(data.EURBRL.pctChange);
        eurRateEl.textContent = `R$ ${eurRate.toFixed(2)}`;
        eurPctEl.textContent = `${eurPct >= 0 ? '+' : ''}${eurPct.toFixed(2)}%`;
        eurPctEl.className = 'rate-pct ' + (eurPct >= 0 ? 'up' : 'down');
        
        // Timestamp
        const now = new Date();
        timestampEl.textContent = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch (error) {
        console.warn('Erro ao carregar cotações reais. Usando simulador offline...', error);
        
        // Simulating realistic fallback values if offline or blocked
        usdRateEl.textContent = "R$ 5,08";
        usdPctEl.textContent = "+0.12%";
        usdPctEl.className = "rate-pct up";
        
        eurRateEl.textContent = "R$ 5,50";
        eurPctEl.textContent = "-0.08%";
        eurPctEl.className = "rate-pct down";
        
        const now = new Date();
        timestampEl.textContent = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + " (Modo Offline)";
    }
}

// 7. Init and Event Binding
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderGrid(companiesData);
    renderTable(companiesData);
    initCharts();
    
    // Initialize sort label and results count
    updateSortLabel();
    updateResultsCount(companiesData.length);
    
    // Live Financial Indicators startup & hourly interval
    fetchLiveRates();
    setInterval(fetchLiveRates, 3600000); // 3600000 ms = 1 hora
    
    // Filters Events
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('filterCity').addEventListener('change', applyFilters);
    document.getElementById('filterMaterial').addEventListener('change', applyFilters);
    document.getElementById('sortBy').addEventListener('change', applyFilters);
    document.getElementById('filterYearMin').addEventListener('change', applyFilters);
    document.getElementById('filterYearMax').addEventListener('change', applyFilters);
    document.getElementById('valueYearMin').addEventListener('change', applyFilters);
    document.getElementById('valueYearMax').addEventListener('change', applyFilters);
    document.getElementById('metricAgg').addEventListener('change', (e) => { metricAgg = e.target.value; applyFilters(); });
    document.getElementById('btnResetFilters').addEventListener('click', resetFilters);
    // Export / Record buttons
    document.getElementById('btnExportCSV').addEventListener('click', exportFilteredToCSV);
    document.getElementById('btnRecordDemo').addEventListener('click', recordDemoGIF);
    
    // Sort Toggle Button
    document.getElementById('btnSortToggle').addEventListener('click', () => {
        sortReversed = !sortReversed;
        const toggleBtn = document.getElementById('btnSortToggle');
        toggleBtn.classList.toggle('reversed');
        applyFilters();
    });
    
    // Modal Events
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('companyModal').addEventListener('click', (e) => {
        if (e.target.id === 'companyModal') {
            closeModal();
        }
    });
    
    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Strategic Tab Switcher
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active from all buttons & contents
            tabButtons.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Set active
            btn.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });
});

