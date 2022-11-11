// kata -https://www.codewars.com/kata/567ed5db4089538eea000010/

function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}
