// import { StringLike } from '../types/Base';

export default function toString<T>(x?: T) {
  return x?.toString();
}

// Strict typing 
// import { StringLike } from '../types/Base';

// export default function toString<T extends StringLike>(x?: T) {
//   return x?.toString();
// }
