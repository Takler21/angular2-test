export interface data
{
    title: string;
    category: string;
}

export interface Varios {
    estado: boolean;
}

export interface Post {
    id?: number;
    data: data;
    varios: Varios;
}


export interface GroupPosts {
    category: string;
    posts: Post[];
}