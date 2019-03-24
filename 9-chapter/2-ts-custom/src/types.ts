interface Window {
  myValue: number;
}

declare module '*.png' {
  const content: string;
  export default content;
}
