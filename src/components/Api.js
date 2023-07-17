export default  class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers
    }
    
    //проверка ответа сервера на корректность
    _validateResponse(res) {
        if(res.ok) {
            // console.log(`Значение 'res' в _validateResponse()=${res}`);
            return res.json();
        } //в случае ошибки - отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
        .then((res) => {
            // console.log(res.json());
            this._validateResponse(res);
        })
    }

    // getInitialCards() {
    //     //возвращаем объект Promise через return fetch
    //     return fetch(`${this.baseUrl}/cards`, {
    //         method: 'GET',
    //         headers: this.headers
    //     })
    //     .then((res) => {
    //         console.log(res.json())
    //         // this._validateResponse(res);
    //     })
    //     .then((data) => {
    //         console.log(data)
    //     })
    // }
}