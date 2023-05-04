import { Request, Response, NextFunction } from "express";
/**
 * setup console middleware (logs the request method, url and status code)
 * and the time it took to process the request
 *  */ 
export const consoleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.info(`[${req.method}] ${req.originalUrl} : ${res.statusCode} (${duration}ms)`);
    });
    next();
}