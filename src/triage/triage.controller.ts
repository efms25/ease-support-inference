import type { FastifyReply, FastifyRequest } from "fastify";

export class TriageController {
  constructor() {}

  async inference(
    request: FastifyRequest<{ Body: { input: string } }>,
    reply: FastifyReply,
  ) {

    return reply.code(200).send('good')
  }
}
