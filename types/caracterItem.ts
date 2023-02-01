export interface Caracter {
    family: string;
    firstName: string;
    fullName: string;
    id: number;
    image: string;
    imageUrl: string;
    lastName: string;
    title: string;
}

export interface CaracterItemProps {
    item: Caracter;
}