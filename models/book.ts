import * as mongoose from 'mongoose';

export interface IComic extends mongoose.Document {
  comicName: string;
  comicIssue: number;
  comicPublisher: 'Marvel' | 'DC' | 'Image';
}

let comicSchema = new mongoose.Schema({
  comicName: {
    type:String,
    required: true,
    minlength: 3
  },
  comicIssue: {
    type:Number,
    required: true,
    minlength: 2
  },
  comicPublisher: {
    enum:['Marvel', 'DC', 'Image'],
    type: String,
    required: true
  }
});

export default mongoose.model<IComic>('Comic', comicSchema);
