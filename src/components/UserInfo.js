export default class UserInfo {
    constructor({name, about, avatar}) {
        this._userName = document.querySelector(name);
        this._userData = document.querySelector(about);
        this._userAvatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userData.textContent
        }
    }

    //получаем данные пользователя и выводим их на страницу
    setUserInfo(name, about) {
        this._userName.textContent = name; //здесь должно быть имя инпута (атрибут name, был изменён в html на name)
        this._userData.textContent = about; //здесь должно быть имя инпута (атрибут name)
    }

    //устанавливаем аватар
    setUserAvatar(link) {
        this._userAvatar.src = link; //link - также имя инпута
    }
}

// Previous code (just in case)
// constructor({userNameSelector, userDataSelector}) {
//     this._userName = document.querySelector(userNameSelector);
//     this._userData = document.querySelector(userDataSelector);
// } свойства в конструкторе обновлены и переименованы на новые

// setUserInfo({nameInput, nameDescription}) {
//     this._userName.textContent = nameInput; //здесь должно быть имя инпута (атрибут name)
//     this._userData.textContent = nameDescription; //здесь должно быть имя инпута (атрибут name)
// }