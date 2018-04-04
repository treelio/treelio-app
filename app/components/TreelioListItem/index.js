/**
 * A Treelio list item
 */

import styled from 'styled-components';

const TreelioListItem = styled.li`
  display: grid;
  background-color: #fff;
  color: #4B4B4B;
  color: #777;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  & name {
  font-weight: bold;
  }
  & vendor {
  color: #666;
  }

`;

export default TreelioListItem;
