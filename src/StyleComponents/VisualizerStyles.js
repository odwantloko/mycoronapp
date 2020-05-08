import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const VisualizerStyles = styled.div`
   h2 {
    font-size: 15px;
    color: #9A9A9A;

   }

   h2 b {
    color: cornflowerblue;
   }

   h1 {
       color: #fff;
   }

  ${breakpoint('tablet')`

  h2 {
    font-size: 25px;
    color: #9A9A9A;

   }

   h2 b {
    color: cornflowerblue;
   }

   
   h1 {
    color: #fff
}

`}

`;
export default VisualizerStyles;
