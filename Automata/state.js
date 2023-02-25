export class DState {
    constructor(label, inputs, { start = false, final = false }) {
        this.label = label;
        this.transition = {};
        this.start = start;
        this.final = final;
        for (const o of inputs) {
            this.transition[o] = null
        }
    }
}
export const EPSILON = null;
