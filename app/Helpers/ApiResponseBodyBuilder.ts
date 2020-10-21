export class ApiResponseBodyBuilder {
  public success (message: string, statusCode: number, results?: any): any {
    return {
      error: false,
      code: statusCode,
      message,
      results,
    }
  }

  public error (message: string, statusCode: number): any {
    return {
      error: true,
      code: statusCode,
      message,
    }
  }
}

export default new ApiResponseBodyBuilder()
