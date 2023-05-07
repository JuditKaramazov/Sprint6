import { Block } from '../../styled';

function Scene({ singleQuote, quoteIndex, id }) {
  return (
    <div>
      <Block selected={quoteIndex === id ? true : false}>{ singleQuote }</Block>
    </div>
  );
}

export default Scene;