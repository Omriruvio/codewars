// // kata - https://www.codewars.com/kata/586dd26a69b6fd46dd0000c0

function myFirstInterpreter(code) {
  code = code.replace(/[^+\.]/g, '');
  let cell = 0;
  let result = '';
  for (const x of [...code]) {
    x === '+' ? ++cell : (result += String.fromCharCode(cell));
    cell = cell % 256;
  }
  return result;
}

// class Command {
//   static get increment() {
//     return '+';
//   }

//   static get output() {
//     return '.';
//   }

//   static get all() {
//     return [Command.increment, Command.output];
//   }

//   constructor(value) {
//     this.value = value;
//   }
// }

// class Memory {
//   constructor(value) {
//     this.value = value;
//   }

//   increment() {
//     this.value += 1;
//     if (this.value > 255) {
//       this.value = 0;
//     }
//   }

//   output() {
//     return String.fromCharCode(this.value);
//   }
// }

// class Output {
//   constructor(value) {
//     this.value = value;
//   }

//   add(char) {
//     this.value += char;
//   }
// }

// class Interpreter {
//   constructor(code) {
//     this.commands = code.split('').map((command) => new Command(command));
//     this.memory = new Memory(0);
//     this.output = new Output('');
//   }

//   run() {
//     for (const command of this.commands) {
//       switch (command.value) {
//         case Command.increment:
//           this.memory.increment();
//           break;
//         case Command.output:
//           this.output.add(this.memory.output());
//           break;
//         default:
//           break;
//       }
//     }
//   }
// }

// function myFirstInterpreter(code) {
//   const interpreter = new Interpreter(code);
//   interpreter.run();
//   return interpreter.output.value;
// }

// Hello World Program - outputs the string "Hello, World!"
console.log(
  myFirstInterpreter(
    '++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++.+++++++..+++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++.+++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.'
  ),
  'Hello, World!'
);
// Outputs the uppercase English alphabet
console.log(
  myFirstInterpreter('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.'),
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
);
