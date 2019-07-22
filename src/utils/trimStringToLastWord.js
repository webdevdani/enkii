/**
 * Trims a string down to the passed length, but without
 * cutting it off in the middle of a word.
 * @param  {string} strng
 * @param  {number} length
 * @return {string}
 */
export default function trimStringToLastWord(text, maxLength) {
    let trimmedString = text.substr(0, maxLength);
    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
    );

    return trimmedString;
}
