export interface Project {
    title: string,
    status: string,
    image?: string,
    links?: {url: string, name: string}[],
    yt_embed?: string,
    tags: string[],
    description: string
}