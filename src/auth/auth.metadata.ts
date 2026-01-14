import { SetMetadata } from "@nestjs/common";


export const AuthMetaData = (...metdata: string[]) => SetMetadata('authorized', metdata);

