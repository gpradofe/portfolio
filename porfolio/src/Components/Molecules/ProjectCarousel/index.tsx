import React, { useEffect, useState } from "react";
import {
  CardContent,
  DescriptionList,
  GitHubBox,
  GitHubLogoContainer,
  PageTitle,
  ProjectCard,
  ProjectCarouselContainer,
  StyledSlider,
  WhiteLink,
} from "./styles";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { GitHubRepo } from "../../../Types/GithubTypes";
type Description = {
  description: string[];
};

async function getGitHubRepos() {
  const response = await fetch(`https://api.github.com/users/gpradofe/repos`);
  return await response.json();
}
function renderDescriptionItem(item: string, idx: number) {
  if (item.includes("published a paper")) {
    return (
      <li key={idx} data-content={item.startsWith("•") ? "•" : undefined}>
        Authored and{" "}
        <WhiteLink
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          published a paper
        </WhiteLink>{" "}
        detailing the methodology and findings.
      </li>
    );
  }
  return (
    <li key={idx} data-content={item.startsWith("•") ? "•" : undefined}>
      {item.startsWith("•") ? item.substring(1).trim() : item}
    </li>
  );
}

const ProjectCarousel: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedRepos = await getGitHubRepos();
      setRepos(fetchedRepos);
    })();
  }, []);
  const descriptions: { [key: string]: Description & { name: string } } = {
    portfolio: {
      name: "Web Portofolio",
      description: [
        "• Immersive interactive representation using cutting-edge front-end development techniques.",
        "• Utilizes advanced React libraries:",
        "- react-three for 3D visuals",
        "- react-spring and react-framer-motion for dynamic and fluid animations",
        "• Critical React techniques deployed:",
        "- Context management ensuring seamless data flow and state management",
        "• Adheres to an atomic design structure, promoting modularity:",
        "- Components classified as atoms, molecules, organisms, and pages",
        "• Skills chart path-finder algorithm stands out:",
        "- Employs Dijkstra's algorithm combined with a priority queue",
        "- Enhanced efficiency through memoization, ensuring rapid pathfinding and reduced computational overhead.",
      ],
    },
    DataFest: {
      name: "Data Fest Project",
      description: [
        "• Context: Participated in the National DataFest competition.",
        "• Objective: Devised a strategic solution for optimizing client engagement on an online lawyering platform.",
        "• Key Techniques Used:",
        "- Utilized the pandas library to merge fragmented CSV datasets.",
        "- Employed advanced data processing and analysis.",
        "• Advanced Methods:",
        "- Topic modeling using machine learning to categorize conversations.",
        "- Sentiment analysis to correlate attorney response times with client sentiment.",
        "• Results:",
        "- Gained insights to refine client interactions.",
        "- Informed and improved hiring decisions based on the data analysis.",
      ],
    },
    PQSH_Project: {
      name: "PQSH Shell Project",
      description: [
        "• Developed a multi-core process queue shell, 'pqsh', for advanced task scheduling.",
        "• Unique Feature:",
        "- Commands are queued rather than instantly executed.",
        "• User Commands:",
        "- `add COMMAND`: Adds job to waiting queue.",
        "- `status [QUEUE]`: Shows metrics & job status per queue.",
        "• Scheduling Disciplines:",
        "- FIFO: Sequential job execution.",
        "- Round Robin: Cyclic job execution.",
        "• Command Line Flexibility:",
        "- Options to set CPU cores, scheduling policies, and timer intervals.",
        "• Practical Applications:",
        "- Skills applicable to cloud load balancing and distributed systems.",
        "• Sourced knowledge from 'Operating Systems: Three Easy Pieces' for in-depth understanding.",
      ],
    },
    MLCountryMarket: {
      name: "The Country Market Research Project",
      description: [
        "• Conducted extensive research to identify food deserts in the US and understand their specific demands.",
        "• Data Collection:",
        "- Distributed mail and Google Form surveys for direct feedback.",
        "• Text Analysis & Clustering:",
        "- Tokenization on specific feedback fields.",
        "- Employed HDBScan + UMAP for high-dimensional clustering & visualization.",
        "• Iterative Clustering:",
        "- Filtered data based on cluster responses and performed secondary clustering.",
        "• Outcome & Visualization:",
        "- Successfully mapped the fundamental needs of food deserts in northern US.",
        "- Developed an interactive map displaying insights for each cluster.",
        "• Start-up Impact:",
        "- Delivered actionable insights for my start-up, the TCM, guiding strategy and focus.",
        "• Published Research:",
        "- Authored and published a paper detailing the methodology and findings.",
      ],
    },
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
      <PageTitle>Projects</PageTitle> {/* This line adds the title */}
      <StyledSlider {...settings}>
        {repos.map((repo, index) => (
          <ProjectCard key={index}>
            <h3>
              {descriptions[repo.name]
                ? descriptions[repo.name].name
                : repo.name}
            </h3>
            <ul>
              <li>Language: {repo.language}</li>
              <li> Description: </li>
            </ul>

            <DescriptionList>
              {descriptions[repo.name] ? (
                descriptions[repo.name].description.map((item, idx) =>
                  renderDescriptionItem(item, idx)
                )
              ) : (
                <li>Additional details not available.</li>
              )}
            </DescriptionList>
            <GitHubBox>
              <a
                href={`https://github.com/gpradofe/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoContainer>
                  <FaGithub size={30} />
                  <span>Check out the full code</span>
                </GitHubLogoContainer>
              </a>
            </GitHubBox>
          </ProjectCard>
        ))}
      </StyledSlider>
    </ProjectCarouselContainer>
  );
};

export default ProjectCarousel;
