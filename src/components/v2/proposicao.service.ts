export class ProposicaoService {
  urlServicoPesquisaProposicoes: string = '';
  url: string = '';

  constructor(urlServicoPesquisaProposicoes?: string) {
    this.urlServicoPesquisaProposicoes = urlServicoPesquisaProposicoes || '';
  }

  pesquisarProposicoes(sigla: string, numero: string, ano: number) {
    this.url = this.urlServicoPesquisaProposicoes;
    this.url += '?sigla=' + sigla + '';
    this.url += numero ? '&numero=' + numero + '' : '';
    this.url += '&ano=' + ano + '';
    return this.url;
  }
}

export interface ProposicaoBasica {
  sigla: string;
  numero: string;
  ano: number;
  ementa: string;
}

export interface Proposicao extends ProposicaoBasica {
  idIdentificacao: number;
  descricaoIdentificacao: string;
  descricaoIdentificacaoExtensa: string;
  idSdlegDocumentoDigital?: string;
  idSdlegDocumentoItemDigital?: string;
  urlDownloadItemDigitalZip?: string;
}
