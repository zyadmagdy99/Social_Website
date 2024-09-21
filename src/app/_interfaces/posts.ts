export type Posts = {
    _id : string;
    body : string;
    image?: string;
    user:user;
    comments:comment[];
    createdAt:string 

};

export type user={
    _id :string;
    name:string;
    photo?:string
}

export type comment = {
    _id :string;
    content :string;
    commentCreator:user;
    createdAt:string
}