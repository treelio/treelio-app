/**
 * A Treelio list item
 */

import styled from 'styled-components';

const TreelioListItem = styled.li`
  display: flex;
  background-color: #fff;
  color: #4B4B4B;
  color: #777;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 20px;
  align-items: center;

  & div {
    width: 50px;
    height: 50px;
    background-color: black;
  }

  & ul {
    flex-grow: 1;

    list-style: none;
    margin:0;
    padding:0 0 0 20px;
    height:50px;
  }
  & ul:last-child {
    text-align:right;
  }
  & li {
    margin:0;
    line-height: 20px;
    padding: 0;
  }
  & li:first-child {
    font-weight: bold;
  }

`;

export default TreelioListItem;
