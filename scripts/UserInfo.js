import {profileName, profileDescription} from './constants.js'

export default class UserInfo {
    constructor({userName, userData}) {
        this._userName = document.querySelector(userName);
        this._userData = document.querySelector(userData);
    }

    getUserInfo() {
        const userInfo = {
            userName: this._userName.value,
            userData: this._userData.value
        }
        return userInfo;
    }

    setUserInfo() {
        const {userName, userData} =  this.getUserInfo();
        profileName.textContent = userName;
        profileDescription.textContent = userData;
    }
}