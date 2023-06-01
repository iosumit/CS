// for finding even length String
// L = {ep, aa, aa, ab, bb, aaaa, abab....}
// ep => null;
function dfaEvenLengthMachine() {
    let inputs = [a, b];
    let A = new DState('A', inputs, { start: true, final: true });
    let B = new DState('B', inputs, false);
    let C = new DState('C', inputs, { final: true });
    A.transition.a = B;
    A.transition.b = B;
    B.transition.a = C;
    B.transition.b = C;
    C.transition.a = B;
    C.transition.b = B;
    let start = A;
    return start;
}
function validate(root, i, s) {
    if (s.length == i)
        return root.final;
    return validate(root.transition[s[i]], ++i, s);
}