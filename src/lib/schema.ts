import { z } from 'zod';
import { zTodoObject as Todo } from './types';

export const zTodosObject = z.object({
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
  todos: z.array(Todo),
});

export type TodosSchema = z.infer<typeof zTodosObject>;
