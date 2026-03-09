import { z } from "zod";

export const requestSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  requestType: z.string().min(1, "Select a request type"),
  description: z.string().min(5, "Description is required"),
});

export type RequestData = z.infer<typeof requestSchema>;