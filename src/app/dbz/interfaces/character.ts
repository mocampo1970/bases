
// Ese id lo pusimos de ultimo y para no tener que refactorizar le colocamos la ? que 
// significa que es opcional

export interface Character {
    id?: string;
    name: string;
    power: number;
}
