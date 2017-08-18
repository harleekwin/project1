import * as express from 'express';
import Comic from '../models/book';

let router = express.Router();

router.get('/publisher/:name', (req, res) => {
  Comic.find({comicPublisher:req.params["name"]}, (err, comics) => {
    if (err) {
      res.send(err)
    } else {
      res.json(comics);
    }
  })
})

router.get('/', (req, res) => {
  Comic.find().then((comics)=> {
      res.json(comics);
  }).catch((err) => {
      res.status(500);
      console.error(err);
  })
});


router.get('/:id', (req, res) => {
  Comic.findById(req.params['id']).then((comic) => {
    res.json(comic);
  });
});


router.post('/', (req, res) => {
  console.log(req.body);
if(req.body._id){
  let comicId = req.body._id;

  Comic.findById(comicId).then((comic) => {
    comic.comicName = req.body.comicName;
    comic.comicIssue = req.body.comicIssue;
    comic.comicPublisher = req.body.comicPublisher;


    comic.save().then((updatedComic) => {
      res.json(updatedComic);
    }).catch((err) => {
      res.status(400).json(err);
    });

  }).catch(() => {
    res.sendStatus(404);
  });

}
else{
  let comic = new Comic();
  comic.comicName = req.body.comicName;
  comic.comicIssue = req.body.comicIssue;
  comic.comicPublisher = req.body.comicPublisher;
  comic.save().then((newComic) => {
    res.json(newComic);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
}
});


router.post('/:id', (req, res) => {

});



router.delete('/:id', (req, res) => {
  let comicId = req.params.id;
  Comic.remove({_id:comicId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500);
    console.log(err);
  });
});

export default router;
