import React from "react";

type Options = {
    clicksToSave: number,
    detectNonhumanClick: boolean,
    detectClickInterval: {
        enabled: boolean,
        margin: number
    }
}

export default class AntiAutoClick {
    clickTimes: number[] = [];
    options: Options;
    isCheating: boolean = false;
    uncheatTimeout: NodeJS.Timeout | undefined;

    constructor(options: Options) {
        this.options = options;
    };

    cheats() {
        console.error('Heyo stop cheating man');
        this.clickTimes = [];
        if (this.uncheatTimeout) clearTimeout(this.uncheatTimeout);

        this.isCheating = true;
        this.uncheatTimeout = setTimeout(() => {
            this.uncheats()
        }, 10000);
    };

    uncheats() {
        this.isCheating = false;
        this.uncheatTimeout = undefined;
    };

    click(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (this.uncheatTimeout) this.cheats();

        // Save clicks
        if (this.options.clicksToSave > 0) {
            this.clickTimes.push(Date.now());
            if (this.clickTimes.length > this.options.clicksToSave) this.clickTimes.shift();
        }

        // Detect nonhuman clicking
        if ((this.options.detectNonhumanClick == true) && (event.isTrusted == false)) {
            this.cheats();
        }


        if ((this.options.detectClickInterval.enabled == true) && (this.clickTimes.length == this.options.clicksToSave)) {
            // Detect click interval
            let arr = this.clickTimes.map((time, i) => time - this.clickTimes[i - 1]).filter(i => !Number.isNaN(i));

            const mean = arr.reduce((sum, value) => sum + value, 0) / arr.length;
            const variance = arr.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / arr.length;

            let repetitionArr = arr.filter(v => v > 50);

            const RepetitionMean = repetitionArr.reduce((sum, value) => sum + value, 0) / repetitionArr.length;
            const RepetitionVariance = repetitionArr.reduce((sum, value) => sum + Math.pow(value - RepetitionMean, 2), 0) / repetitionArr.length;

            if (variance < this.options.detectClickInterval.margin || RepetitionVariance < this.options.detectClickInterval.margin) return this.cheats();
        }
    };
}