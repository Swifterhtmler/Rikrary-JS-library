function quad(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
       return "No roots"
    } else if (discriminant === 0) {
        let resultC = -b / (2 * a);
        return "One real root: " + resultC;
    } else {
    let resultA = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
    let resultB = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a));
    return resultA + " or " + resultB;
    }
}