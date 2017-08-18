import * as mongoose from 'mongoose';

let comicSchema = new mongoose.Schema({
  comicName: {
    type:String,
    required: true,
    minlength: 3
  },
  comicIssue: {
    type:String,
    required: true,
    minlength: 2
  },
  comicPublisher: {
    type: String,
    required: true
  }
});

export default mongoose.model('Comic', comicSchema);
