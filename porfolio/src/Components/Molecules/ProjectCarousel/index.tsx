import React, { useEffect, useState } from "react";
import {
  CloseButton,
  CodeModal,
  ProjectCard,
  ProjectCarouselContainer,
  RepoCard,
  StyledCodeSnippet,
  StyledSlider,
} from "./styles";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { GitHubRepo } from "../../../Types/GithubTypes";

async function getGitHubRepos() {
  const response = await fetch(`https://api.github.com/users/gpradofe/repos`);
  return await response.json();
}

const ProjectCarousel: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const fetchedRepos = await getGitHubRepos();
      setRepos(fetchedRepos);
    })();
  }, []);

  const showcaseCode = (repoName: string) => {
    const snippets: { [key: string]: string } = {
      portfolio: "const example = 'Some interesting code for repo1';",
      repo2: "function showcase() { return 'Feature for repo2'; }",
      repo3: "class MyClass { constructor() { this.name = 'repo3'; }}",
      repo4: "puts 'Hello from repo4'",
    };
    setSelectedSnippet(snippets[repoName] || null);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ProjectCarouselContainer>
      <StyledSlider {...settings}>
        {repos.map((repo, index) => (
          <ProjectCard key={index}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "Description not available"}</p>
            <ul>
              <li>Language: {repo.language}</li>
              <li>Stars: {repo.stargazers_count}</li>
              <li>Watchers: {repo.watchers_count}</li>
              {/* You can add more details as list items here */}
            </ul>
            <a
              href={`https://github.com/gpradofe/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>

            <button onClick={() => showcaseCode(repo.name)}>See Code</button>

            <RepoCard>
              <h4>GitHub Details</h4>
              <p>{repo.description || "No additional details available"}</p>
            </RepoCard>
          </ProjectCard>
        ))}
      </StyledSlider>

      {selectedSnippet && (
        <CodeModal>
          <StyledCodeSnippet>{selectedSnippet}</StyledCodeSnippet>
          <CloseButton onClick={() => setSelectedSnippet(null)}>
            Close
          </CloseButton>
        </CodeModal>
      )}
    </ProjectCarouselContainer>
  );
};

export default ProjectCarousel;
