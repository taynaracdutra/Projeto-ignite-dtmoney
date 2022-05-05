import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f0f2f5;

        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33cc95;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #fff;
    }

    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        font-size:16px;

        @media(max-width:1080px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing; antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-wight:400;
    }

    button{
        cursor:pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .react-modal-content {
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
      }

      button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-wight:600;

        transition: filter 0.2s ease;

        &:hover{
            filter: brightness(0.9);
        }
      }

      .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2 ease;
    
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
`;
