interface TechnologyInfoLibrary {
    name: string;
    image: () => any;
}

export interface TechnologyInfo {
    name: string;
    libraries: TechnologyInfoLibrary[];
    image: () => any;
}