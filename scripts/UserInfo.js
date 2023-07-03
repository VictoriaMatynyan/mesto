export default class UserInfo {
    constructor({userNameSelector, userDataSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userData = document.querySelector(userDataSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            data: this._userData.textContent
        }
        return userInfo;
    }

    setUserInfo({nameInput, nameDescription}) {
        this._userName.textContent = nameInput;
        this._userData.textContent = nameDescription;
    }
}