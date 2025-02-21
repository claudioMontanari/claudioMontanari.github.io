import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled, { keyframes } from "styled-components";
// Data and Icons
import { Blog, GitHubIcon, HuggingFaceIcon, huggingFaceUrl } from "../data";

// Define bounce animation
const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .link-icons {
    font-size: 2rem;
    display: inline-block;
    animation: ${bounce} 1.5s infinite;
  }

  .link-icons:nth-child(1) {
    animation-delay: 0s;
  }
  .link-icons:nth-child(2) {
    animation-delay: 0.2s;
  }
  .link-icons:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        {GitHubIcon}
      </a>
      {blog && (
        <a
          href={blog}
          aria-label="Check out my Medium profile"
          className="link-icons"
        >
          {Blog}
        </a>
      )}
      <a
        href={huggingFaceUrl}
        aria-label="Check out my HuggingFace profile."
        className="link-icons"
      >
        {HuggingFaceIcon}
      </a>
    </StyledSocialLinks>
  );
}
