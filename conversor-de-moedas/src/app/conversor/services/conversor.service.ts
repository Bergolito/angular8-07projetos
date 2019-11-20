import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { 
	Conversao,
	ConversaoResponse 
} from '../models';

@Injectable()
export class ConversorService {

  //private readonly BASE_URL = "http://api.fixer.io/latest";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=1b0163e086453a5edb62542c6c633f7b";
  
  constructor(private http: Http) {}

  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<ConversaoResponse> {
    //http://data.fixer.io/api/convert?access_key=1b0163e086453a5edb62542c6c633f7b
    //&from=USD&to=BRL&amount=1000&date=2019-11-07
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

  	return this.http
      .get(this.BASE_URL + params)
      .map(response => response.json() as ConversaoResponse)
      .catch(error => Observable.throw(error));
  }

  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): number {
  	if (conversaoResponse === undefined) {
  		return 0;
  	}

  	return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): string {
  	if (conversaoResponse === undefined) {
  		return '0';
  	}

  	return (1 / conversaoResponse.rates[conversao.moedaPara])
  		.toFixed(4);
  }

  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }

}
