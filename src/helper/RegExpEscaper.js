class RegExpEscaper {
    static create = (str) => {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
}

export default RegExpEscaper;
