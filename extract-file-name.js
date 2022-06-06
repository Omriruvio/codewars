// kata - https://www.codewars.com/kata/597770e98b4b340e5b000071

// input - String formatted - number, underscore, filename, ext, ext.
// acceptable character input:
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// output - filename with first extension

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    const result = dirtyFileName.match(/(?<=\d+_)[\w-]+\.[\w-]+(?=.*)/g);
    if (result) return result[0];
  }
}

console.log(FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'), 'FILE_NAME.EXTENSION');
console.log(FileNameExtractor.extractFileName('1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34'), 'This_is_an_otherExample.mpg');
console.log(FileNameExtractor.extractFileName('1231231223123131_myFile.tar.gz2'), 'myFile.tar');
