export default function truncateIfOver(str, lim) {
    if (str.length <= lim) {
        return str;
    }
    const substr = str.slice(0, lim - 1);
    return `${substr.substr(0, substr.lastIndexOf(' '))}\u2026`;
}
