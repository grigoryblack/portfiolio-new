declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.scss' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}
