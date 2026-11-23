import type { FastifyInstance } from "fastify";
import type { TriageController } from "./triage.controller.ts";

export async function triageRoutes(app: FastifyInstance, controller: TriageController) {
    app.post('/ask', controller.inference)
}