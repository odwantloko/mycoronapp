import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const GlobalTableStyles = styled.div`
    th {
        border-bottom-width: 1px;
        font-size: 15px;
        text-transform: uppercase;
        color: #333333;
        font-weight: 200;
        padding-bottom: 5px; 

    }


  ${breakpoint('tablet')`

    th {
        border-bottom-width: 1px;
        font-size: 25px;
        text-transform: uppercase;
        color: #9A9A9A;
        font-weight: 400;
        padding: 5px 50px 5px 0px;
        background-color: # fff;
        text-align: left;  
    }

    td {
        border-bottom-width: 1px;
        font-size: 20px;
        padding: 5px 50px 5px 0px;


    }

`}

`;
export default GlobalTableStyles;
