export default function validatePassword(value) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_]{8,}$/;
    return re.test(String(value));
}
