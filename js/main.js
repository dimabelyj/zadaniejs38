function ar(a, b) {
    /*let c = a + b;
    let d = a - b;
    let e = a * b;
    console.log('wynikiem dodawania jest' + c);
    console.log('wynikiem odejmowania jest' + d);
    console.log('wynikiem mnożenia jest' + e);
    console.log('Wynik jest ujemny');
    if (a + b) {
        return c;
    } else if (a - b) {
        return d;
    } else if (a * b) {
        return e;
    } else if (a / b) {

    }
}*/

    if (a + b > 0) {
        console.log('wynikiem dodawania jest' + (a + b));
    } else {
        console.log('wynik jest ujemny');
    }
    if (a - b > 0) {
        console.log('wynikiem odejmowania jest' + (a - b));
    } else {
        console.log('wynik jest ujemny');
    }
    if (a * b > 0) {
        console.log('wynikiem mnożenia jest' + (a * b));
    } else {
        console.log('wynik jest ujemny');
    }

}