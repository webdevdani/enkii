const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];

/**
 * Formats a passed date, into a short format. ex: Jan 22, 2019
 * @param  {Date}       date
 * @return {string}     formatted date
 */
export default function shortFormatDate(date = new Date()) {
    const year = date.getFullYear();
    const month = shortMonths[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}, ${year}`;
}
