// Dados do currículo. Podem ser trocados por uma chamada de API ou store (Pinia).

export const perfil = {
  iniciais: 'MM',
  nome: 'Marty McFly',
  titulo: 'Consultor de Cronologia e Especialista em Performance Musical',
  bio:
    'Jovem dinâmico, pontual (quando o capacitor de fluxo permite) e com vasta experiência em resolução de paradoxos temporais. ' +
    'Guitarrista talentoso com domínio de técnicas avançadas de shredding antes mesmo de serem inventadas. ' +
    'Experiente em lidar com figuras históricas, direção defensiva de veículos modificados e skate urbano. ' +
    'Nota: Não me chame de frangote.'
}

export const experiencias = [
  {
    id: 1, inicio: '1985', periodo: '1985 – Presente', separador: '|', local: 'The Pinheads',
    cargo: 'Guitarrista Principal',
    descricao: 'Composição e performance de Rock \'n\' Roll. Responsável pela audição da "Batalha das Bandas" (mesmo sendo considerado "barulhento demais" por alguns juízes).'
  },
  {
    id: 2, inicio: '1955', periodo: '1955', separador: '–', local: 'Baile Encanto sob o Mar',
    cargo: 'Músico Substituto (Guitarra)',
    descricao: 'Substituição emergencial do guitarrista Marvin Berry. Responsável pela introdução cultural do gênero Heavy Metal trinta anos antes do previsto.'
  },
  {
    id: 3, inicio: '1885', periodo: '1885', separador: '–', local: 'Consultoria de Segurança Hill Valley (Velho Oeste)',
    cargo: 'Assistente de Ferreiro',
    descricao: 'Auxílio técnico em engenharia ferroviária improvisada e mediação de conflitos com a gangue de Buford "Cachorro Louco" Tannen.'
  },
  {
    id: 4, inicio: '1985', periodo: '1985', separador: '–', local: 'Indústrias Biffco',
    cargo: 'Sobrevivente Urbano',
    descricao: 'Gestão de crises em ambientes distópicos e recuperação de artefatos esportivos (almanaques) para restauração da ordem cronológica.'
  }
]

export const educacao = [
  {
    id: 1, inicio: '1986', periodo: '1986', separador: '|', local: 'Hill Valley High School',
    tipo: 'Ensino Médio Completo',
    descricao: 'Foco em Artes e Música'
  },
  {
    id: 2, inicio: '1955', periodo: '1955', separador: '|', local: 'Cultural Hill Valley',
    tipo: 'Intercâmbio',
    descricao: 'Estudos intensivos sobre dinâmicas sociais da década de 50 e etiqueta de lanchonetes.'
  },
  {
    id: 3, inicio: '1985', periodo: '1985', separador: '|', local: 'Engenharia Aplicada',
    tipo: 'Workshop',
    descricao: 'Treinamento prático em sistemas de 1.21 Gigawatts e mecânica de DeLorean (sob mentoria do Dr. Emmett Brown).'
  },
  {
    id: 4, inicio: '2015', periodo: '2015', separador: '|', local: 'Mobilidade Urbana Futurista',
    tipo: 'Treinamento',
    descricao: 'Curso intensivo de pilotagem de Hoverboard em superfícies sólidas (atenção: pranchas não funcionam na água sem potência extra).'
  }
]

export const contato = {
  endereco: 'Lyon Estates, Hill Valley, CA.',
  email: 'contato@delorean.com',
  telefone: '+55 (88) 9999 0000',
  telefoneLink: '+558899990000'
}

export const rodape = 'Copyright 2026 - todos os direitos reservados'
