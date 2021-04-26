import styled from "styled-components";


export const HomePageWrapper = styled.div`
background-color:#F4F4F4;
color:#6A6C6E;
font-size:13px;
.left-column {
  max-width:400px;

}
.right-column {
  margin-right:45px;
}
.footer-left {
  max-width: 325px;
}

.invoice-page {
    background: lightgray !important;
    pointer-events: none;
    padding:50px;
}
.add-client {
    border: solid 1px #DDDDDD;
    border-radius: 10px;
    padding: 10px 15px;
    height: 170px;
    max-width: 400px;
    background: #ffffff;
    pointer-events: initial;
  }
  .add-client .add-client-text {
    margin: 30px 0 25px;
  }
  .text-brand, .text-success {
    color: #02BD94 !important;
  }
  .business-type {
    font-size:13px;

  }
  .business-name {
      font-size:12px;
      font-weight:600;
      margin-bottom:40px;
  }
  address {
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
  }
  .invoice {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0;
  }
  
`;

export const ItemPageWrapper = styled.div`

.circle {
  height: 50px;
  width: 60px;
  background-color:#02BD94 ;
  border-radius: 50%;
}

`;