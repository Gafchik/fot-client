enum Direction {
    left,
    right,
    none
}

class Swipe {
    public startPos: number;
    public currentPos: number;

    public X: number;
    public angle: number;

    constructor() {
        this.startPos = 0;
        this.currentPos = 0;
    }

    SetStartPos(pos: number) {
        this.startPos = pos;
        this.currentPos = pos;
    }

    UpdatePos(pos: number) {
        this.currentPos = pos;
    }

    CheckDirection(): number {
        if (Math.abs((window.innerWidth / 2) - this.currentPos) <= 100) return Direction.none;
        if (window.innerWidth / 2 > this.currentPos) return Direction.left;
        if (window.innerWidth / 2 < this.currentPos) return Direction.right;
        return Direction.none;
    }
}

export let swipe = new Swipe();