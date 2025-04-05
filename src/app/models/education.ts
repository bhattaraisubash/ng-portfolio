export interface Education {
    degree: string;
    university: string;
    location: string;
    rank?: string;
    level: string;
    completionYear: string;
    modules: { name: string }[];
}
