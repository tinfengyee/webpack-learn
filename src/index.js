import { add } from './math';
add(1, 2)

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}