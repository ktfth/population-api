import { Application } from '../declarations';
import v1Population from './v1/population/population.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(v1Population);
}
