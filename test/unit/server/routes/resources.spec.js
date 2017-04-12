const it = require('ava')
const sinon = require('sinon')

const routes = require('../../../../app/server/routes/resources')

const request = {}

it('Returns 201 on POST', t => {

  const response = { sendStatus: sinon.stub() }

  routes.post(request, response)

  t.true(response.sendStatus.calledWith(201))

})
