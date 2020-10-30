let Router = require('express-promise-router');
const { response } = require('./app');

/**
 * Our router needs access to our database, so we define
 * a function that takes the knex object as an argument
 * and returns a new set of routes.
 */
function loadRoutes(knex) {
  let router = new Router();

  // GET /
  router.get('/', async(request, response) => {
    let messages = await knex('messages').select('*').orderBy('created_at', 'DESC');
    let viewName = 'index';
    let viewData = { messages: messages };

    response.render(viewName, viewData);
  });

  // POST /messages
  router.post('/messages', async(request, response) => {
    let messageBody = request.body.body;
    let messageTime = new Date();

    let messageData = {
      body: messageBody,
      created_at: messageTime,
    };

    await knex('messages').insert(messageData);
    response.redirect('/');
  });

  // POST
  router.post('/likes', async(request, response) => {
    let messageID = request.body.message_id;
    await knex('messages').where('id', messageID).increment('likes', 1);
    response.redirect('/');
  });

return router;
}

module.exports = loadRoutes;
