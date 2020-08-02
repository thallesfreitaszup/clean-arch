import app  from './main/config/middleware'
import { SignupAdapter } from './main/signup/signup-adapter';

app.post('/account', new SignupAdapter().handle)
app.listen(3000, () => {
  console.log('running')
})
