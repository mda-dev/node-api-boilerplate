import { NextFunction, Request, Response } from 'express'
import { INTERNAL_SERVER_ERROR } from '../constants/statusCodes'

export class ApiError extends Error {
  public code: number
  constructor(message?: string, code?: number) {
    super(message || INTERNAL_SERVER_ERROR.message)
    this.code = code || INTERNAL_SERVER_ERROR.code
  }
}

export default (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(`Error:`, err)
  const code = err.code || INTERNAL_SERVER_ERROR.code
  const message = err.message || INTERNAL_SERVER_ERROR.message

  const stack = process.env.NODE_ENV === 'develop' ? err.stack : undefined
  res.status(code)
  res.json({ error: { code, message, stack } })
}
