import Fastify from 'fastify'
import { triageRoutes } from './triage/triage.routes.ts'
import { TriageController } from './triage/triage.controller.ts'

const app = Fastify({
    logger: true
})

const triageController = new TriageController();

app.register(async (instance) => {
    await triageRoutes(instance, triageController);
})


app.get('/', async () => {
    return {
        message: 'up'
    }
})

app.get('/health', async () => {
    return {
        status: 'ok',
        timeStamp: new Date().toISOString()
    }
})


export default app