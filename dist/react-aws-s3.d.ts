import { IConfig, DeleteResponse, UploadResponse } from "./types";
declare class ReactS3Client {
    private config;
    constructor(config: IConfig);
    uploadFile(file: File, newFileName?: string): Promise<UploadResponse>;
    deleteFile(fileName: string): Promise<DeleteResponse>;
    private getFileNameWithExtension;
}
export default ReactS3Client;
