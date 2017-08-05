import * as express from 'express';
import * as mongodb from 'mongodb';
let router = express.Router();

router.post('/', (req, res) => {
  let comic = req.body;
  comic._id = new mongodb.ObjectID(req.body._id);
  })


router.get('/', (req, res) => {
  database.db.collection('movies').find().toArray().then((movies) => {
    res.json(movies);
  })
})

router.delete('/:id', (req, res) => {
  let movieId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('movies').remove({_id: movieId}).then(() => {
    res.end();
  })
})
export default router;
