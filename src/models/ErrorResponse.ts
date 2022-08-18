export interface ErrorResponse {
    kind: "error"
    statusCode: number
    error: string
    message: string
}