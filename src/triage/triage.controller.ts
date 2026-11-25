import type { FastifyReply, FastifyRequest } from "fastify";

export class TriageController {
  constructor() {}

  async inference(
    request: FastifyRequest<{ Body: { input: string } }>,
    reply: FastifyReply,
  ) {
    const {input} = request.body;

    return reply.code(200).send(`That is your input: ${input}`);
  }
}
