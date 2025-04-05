export interface Project {
    title: string;
    description: string;
    link?: string;
    technologies: {name: string}[];
    imageUrl?: string;
}