import md5 from 'blueimp-md5';

export function flowerpass(passwd, salt) {
    const tmp = md5(passwd, salt);
    const source = md5(tmp, "snow");
    const rule = md5(tmp, "kise");
    let result = upperCasePassword(source, rule);
    return ensureNotBeginWithDigit(result).substr(0, 16);
}

function upperCasePassword(source, rule) {
    const c = 'sunlovesnow1990090127xykab';
    source = source.split('');
    rule = rule.split('');
    for (let i = 0; i < source.length; i++) {
        if (isNaN(source[i]) && c.search(rule[i]) > -1) {
            source[i] = source[i].toUpperCase();
        }
    }
    return source.join('');
}

function ensureNotBeginWithDigit(passwd) {
    if (!isNaN(passwd[0])) {
        return 'K' + passwd.substr(1);
    } else {
        return passwd;
    }
}
