export interface Experience {
    position: string;
    company: string;
    location?: string;
    type?: string,
    duration: string;
    description: string;
    skills: {name: string}[];
}
