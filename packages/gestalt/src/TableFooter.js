// @flow strict
import * as React from 'react';

type Props = {|
  children: React.Node,
|};

export default function TableFooter(props: Props): React.Node {
  return <tfoot>{props.children}</tfoot>;
}
