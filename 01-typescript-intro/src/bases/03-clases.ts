

export class Pokemon {
    public id: number
    public name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name

    }
}

export class Pokemon2 {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`${this.name}.toUpperCase()!!`)
    }

    speak() {
        console.log(`${this.name} ${this.name}`)
    }
}

export const charmander = new Pokemon2(1, 'charmander')

charmander.speak()
charmander.scream()