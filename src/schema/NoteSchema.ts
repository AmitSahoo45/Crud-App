import { z } from "zod";

export const createNoteSchema = z.object({
    body: z.object({
        title: z
            .string()
            .min(1, { message: "Name must be greater than 1 characters!" }),
        content: z
            .string()
            .min(4, { message: "Descrition must be greater than 4 characters!" }),
    }),
});

export const updateNoteSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z
        .object({
            title: z
                .string()
                .min(1, { message: "Name must be greater than 1 characters!" }),
            content: z
                .string()
                .min(4, { message: "Descrition must be greater than 4 characters!" }),
        })
        .partial(),
});