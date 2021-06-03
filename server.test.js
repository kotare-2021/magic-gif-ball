const request = require('supertest')
const cheerio = require('cheerio')

const server = require('./server')

test('test suite is working', () => {
    expect(true).toBeTruthy()
})

test('/ renders correctly', (done) => {
    expect.assertions(1)
    // const expected = 'some txt'
  
    request(server)
    .get('/')
    .end((err, response) => {
      expect(err).toBeNull()
    //   const actual = response.text
    //   expect(actual).toContain(expected)
      done()
    })
  })