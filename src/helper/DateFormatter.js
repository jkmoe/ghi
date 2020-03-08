class DateFormatter {
    static getDate = (dateString) => {
        if (!dateString) return '-';
        let dateObject = new Date(dateString);
        return dateObject.toLocaleString('default', { month: 'long' }) + ' ' + dateObject.getDate() + ', ' + dateObject.getFullYear();
    };

    static getDateAndTime = (dateString) => {
        if (!dateString) return '-';
        let dateObject = new Date(dateString);
        return dateObject.toLocaleString('default', { month: 'long' }) + ' ' + dateObject.getDate() + ', ' + dateObject.getFullYear() + ' at ' + dateObject.getHours() + ':' + dateObject.getMinutes();
    };
}

export default DateFormatter;
