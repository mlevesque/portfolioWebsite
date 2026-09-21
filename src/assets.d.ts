declare module '*.docx' {
  const fileUrl: string;
  export default fileUrl;
}

declare module '*.docx?url' {
  const fileUrl: string;
  export default fileUrl;
}
