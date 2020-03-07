import dompurify from 'dompurify';

class HtmlSanitizer {
    static createMarkup = (html) => {
        let cleanHtml = dompurify.sanitize(html);
        return {__html: cleanHtml};
    };
}

export default HtmlSanitizer;
