export default function validateUsername(value) {
    const re = /[a-zA-Z\d_]{4,30}/;
    return re.test(String(value));
}
