export default class UserInfo {
  constructor(profileName, profileText ) {
    this._profileName = document.querySelector(profileName);
    this._profileText = document.querySelector(profileText);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      text: this._profileText.textContent
    }
  }

  setUserInfo({ name, text }) {
    this._profileName.textContent = name;
    this._profileText.textContent = text;
  }
}