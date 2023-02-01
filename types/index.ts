import { Caracter } from "./caracterItem";

export interface CaracterQueryProps {
    data: Caracter[] | undefined;
    isLoading: boolean;
    isError: boolean;
}