import app  from './config/middleware'
import * as request from 'supertest'
app.post('/test', (req, res) => {
  res.json( req.body )
})

describe('Express test', () => {
  it('should return the correct response', async() => {
    const response = await request(app).post('/test').send({ message: 'hello' })
    expect(response.text).toEqual({ message: 'hello' })
  })
})
