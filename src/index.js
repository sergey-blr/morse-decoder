const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let answer = '';

    for (i = 0; i < expr.length; i += 10) {
        let symbol = expr.slice(i, i + 10);
        if (symbol == '**********') {
            answer += ' ';
        } else {
            let keyObject = '';
            for (j = 0; j < symbol.length; j += 2) {
                if (symbol.slice(j, j + 2) == '10') {
                    keyObject += '.';
                }

                if (symbol.slice(j, j + 2) == '11') {
                    keyObject += '-';
                }
            }
            answer += MORSE_TABLE[keyObject];
        }
    }
    return answer;
}



module.exports = {
    decode
}