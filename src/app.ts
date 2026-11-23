import Fastify from 'fastify'

const app = Fastify({
    logger: true
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