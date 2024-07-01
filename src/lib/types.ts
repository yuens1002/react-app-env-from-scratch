import { z } from 'zod';

export const zTodoObject = z.object({
  id: z.number(),
  todo: z.string(),
  completed: z.boolean(),
  userId: z.number(),
});
export type Todo = z.infer<typeof zTodoObject>;

export type Completed = 'all' | 'completed' | 'incomplete';
