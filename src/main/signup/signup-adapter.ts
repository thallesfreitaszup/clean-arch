import { HttpRequest } from '../../presentation/protocols/http/http';
import signUpController  from './signup-helpert'
  export class SignupAdapter {
    async handle(req, res)  {
      const httpRequest: HttpRequest = {
        body: req.body
      }
      const response = await signUpController.handle(httpRequest)
      res.json({
        message: response
      })
    }
  }
