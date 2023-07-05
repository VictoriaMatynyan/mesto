export default class UserInfo {
    constructor({userNameSelector, userDataSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userData = document.querySelector(userDataSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            data: this._userData.textContent
        }
    }

    setUserInfo({nameInput, nameDescription}) {
        this._userName.textContent = nameInput; //здесь должно быть имя инпута (атрибут name)
        this._userData.textContent = nameDescription; //здесь должно быть имя инпута (атрибут name)
    }
}