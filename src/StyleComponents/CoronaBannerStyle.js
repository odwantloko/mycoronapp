import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const CoronaBanner = styled.div`
   h4 {
    font-size: 15px;
    color: #fff;
    background-color: #008709;
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
    font-weight: 150;
   }

   a {
    color: #17fcfc;
   }


  ${breakpoint('tablet')`

  h4 {
    font-size: 15px;
    color: #fff;
    background-color: #008709;
    padding-top: 25px;
    padding-bottom: 25px;
    text-align: center;
    font-weight: 150;
   }


`}

`;
export default CoronaBanner;
