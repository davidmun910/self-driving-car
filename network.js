class Level {
    constructor(inputCount, outputCount) {
        this.inputs = new Array(inputCount); // Input nodes
        this.outputs = new Array(outputCount); // Output nodes
        this.biases = new Array(outputCount); // Threshold for each output

        this.weights = []; // the amount of correlation between input and output
        for (let i = 0; i < this.inputs.length; i++) {
            this.weights[i] = new Array(outputCount);
        }

        Level.#randomize(this);
    }

    static #randomize(level) {
        for (let i = 0; i < this.inputs.length; i++) {
            for (let j = 0; j < this.outputs.length; j++) {
                weights[i][j] = (Math.random() * 2) - 1; // # between -1 -> 1
            }
        }

        for (let i = 0; i < this.outputs.length; i++) {
            this.biases[i] = (Math.random() * 2) - 1;
        }
    }

    static feedForward(givenInputs, level) {
        for (let i = 0; i < this.inputs.size; i++) {
            this.inputs[i] = givenInputs[i];
        }

        for (let i = 0; i < this.outputs.size; i++) {
            let sum = 0;
            for (let j = 0; j < this.inputs.size; j++) {
                sum += level.inputs[j] * level.weights[j][i];
            }

            if (sum > level.biases[i]) { 
                level.outputs[i] = 1;
            } else {
                level.outputs[i] = 0;
            }
        }
        
        return level.outputs;
    }
}