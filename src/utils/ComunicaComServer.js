import { BASE_URL } from "./Constantes";

export default class ComunicaComServer {
    constructor() {
        throw new Error("Nao instanciar");
     }

    /**
     * 
     * @param {String} url 
     * @param {Object} data 
     */
    static post(url, data) {
        url = `${BASE_URL}${url}`
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
    
            xhr.onreadystatechange = () => {
    
                if (xhr.readyState === 4) {
    
                    if (xhr.status === 200) {
                        resolve({ msg: 'POST success', response:JSON.parse(xhr.responseText)});
    
                    } else {
                        console.warn("Erro no post");
                        reject({ "msg": `Erro: ${xhr.responseText}` });
                    }
                }
            }

            xhr.send(JSON.stringify(data));

            // possivel colocar um timeout na requisicao
            // setTimeout(() => reject('HOUVE PROBLEMAS'), 5000);

        });
    }

    /**
     * 
     * @param {String} url 
     * @returns {Promisse}
     */
    static get(url) {
        url = BASE_URL + url;
        console.log('Get from', url);
        return fetch(url).then(resposta => (resposta.json()))

    }
}