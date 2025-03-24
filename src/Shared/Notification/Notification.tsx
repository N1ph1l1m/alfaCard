import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

export const Notification = ({title,titleLink,link,style}) => {
  return (
    <StyledWrapper>
      <div  style={style}className="notifications-container">
        <div className="info">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="info-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="info-prompt-wrap">
              <p >
                {title}<br/>
                <Link to={link}> <span className="info-prompt-link">{titleLink} →</span></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .notifications-container {
    width: 320px;
    height: auto;
    font-size: 18px;
    line-height: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .flex {
    display: flex;
  }

  .flex-shrink-0 {
    flex-shrink: 0;
  }

  .info {

    border-left-width: 4px;
    border-radius: 10px ;
    border:1px solid gray;
    padding: 1rem;
  }

  .info-svg {
    height: 1.25rem;
    width: 1.25rem;
    opacity: 70%;
    color: rgb(29, 78, 216);
  }

  .info-prompt-wrap {
    margin-left: 0.75rem;
    color: rgb(29, 78, 216);
  }

  .info-prompt-link {
    font-weight: 500;
    color: rgb(0, 29, 110);
    text-decoration: underline;
  }

  .info-prompt-link:hover {
    color: rgb(29, 78, 216);
  }`;
