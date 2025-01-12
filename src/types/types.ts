export interface Version {
    name: string;
    description: string;
}

export interface License {
    Edícia: string;
    Cena: string;
}

export interface Engine {
    name: string;
    slug: string;
    image: string;
    description: string;
    source: string;
    versions: Version[];
    images: string[];
    pros: string[];
    cons: string[];
    licenses: License[];
}
