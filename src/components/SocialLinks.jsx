import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data and Icons
import { Blog, GitHubIcon, HuggingFaceIcon, huggingFaceUrl } from "../data";

const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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
