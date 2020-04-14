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

  ${breakpoint('desktop')`
     th {
        border-bottom-width: 1px;
        font-size: 35px;
        text-transform: uppercase;
        color: #333333;
        font-weight: 400;
        padding-bottom: 5px; 

    }

    
    td {
        border-bottom-width: 1px;
        font-size: 20px;
        padding: 5px 15px 5px 0px; 
        background-color: # fff;


    }

  
  `}



  ${breakpoint('tablet')`

    th {
        border-bottom-width: 1px;
        font-size: 25px;
        text-transform: uppercase;
        color: #9A9A9A;
        font-weight: 400;
        padding: 5px 25x 5px 0px;
        background-color: # fff;
        text-align: left;
    
        
       
    }

    td {
        border-bottom-width: 1px;
        font-size: 20px;
        padding: 5px 25x 5px 0px;


    }

`}

`;
export default GlobalTableStyles;
