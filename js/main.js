function ar(a, b) {
    let c = a + b;
    let d = a - b;
    let e = a * b;
    if (a + b) {
        //return c;
        console.log('wynikiem dodawania jest');
    } else if (a - b) {
        //return d;
        console.log('wynikiem odejmowania jest');
    } else if (a * b) {
        //return e;
        console.log('wynikiem mnożenia jest');
    } else if (a / b) {
        console.log('Wynik jest ujemny')
    }
}