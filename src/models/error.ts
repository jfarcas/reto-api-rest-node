export interface IErrorParams {
    params: string,
    message: string
}
export interface IError {
    alias: string,
    message: string,
    type: string,
    code: number,
    params: IErrorParams[]
}

export class ApiError implements IError {
    alias: string
    message: string
    type: string
    code: number
    params: IErrorParams[]
    constructor(alias: string,
                message: string,
                type: string,
                code: number,
                params: IErrorParams[]) {
           this.alias = alias;
           this.message = message;
           this.type = type;
           this.code = code
           this.params = params
    }
}
