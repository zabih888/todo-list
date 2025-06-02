// src/common/types/request-with-user.ts
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: {
    userId: number; // since User.id is an `Int` in Prisma
    email?: string;
    // add any other fields you include in JWT payload
  };
}
