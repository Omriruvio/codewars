// kata - https://www.codewars.com/kata/5351b35ebaeb67f9110012d2

class Secret {
  constructor(secret) {
    this._secret = secret;
  }

  getSecret() {
    return this._secret;
  }

  setSecret(x) {
    this._secret = x;
  }
}

function createSecretHolder(secret) {
  return new Secret(secret);
}
