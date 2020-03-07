class DateFormatter {
    static getDate = (dateString) => {
        if (!dateString) return '-';
        let dateObject = new Date(dateString);

        return dateObject.toLocaleString('default', { month: 'long' }) + ' ' + dateObject.getDay() + ', ' + dateObject.getFullYear();
    };
}

export default DateFormatter;
