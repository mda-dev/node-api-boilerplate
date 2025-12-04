import sayHello from '../../services/sayHello'

describe('Test hello services', () => {
  it('should return "Hello World!"', () => {
    const res = sayHello()
    expect(res).toBe('Hello World!')
  })
  it('should return return "Hello John!"', () => {
    const res = sayHello('John')
    expect(res).toBe('Hello John!')
  })
})
