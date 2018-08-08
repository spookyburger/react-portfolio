export default class AuthController {
  constructor(router) {
    router.get('/favorites/:amount', this.getFavorites)
  }

  async getFavorites(req, res) {
    const animals = ["dogs", "cats", "chickens", "snakes"]
    const amount = req.params.amount
    console.log("Animals", animals.slice(0, amount))
    res.send({ animals: animals.slice(0, amount)})
  }
}
