import React, { useEffect } from "react";
import { Vector3D } from "../Types/3DTypes";
import { PerspectiveCamera, Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import { PriorityQueue } from "./PriorityQueue";
import { MiddleOrOuterSkill, Skill, SkillItem } from "../Types/ToolTipTypes";

export const createHexagonalGrid = (
  circleCount: number,
  centralHexRadius: number,
  regularHexRadius: number
): Vector3D[] => {
  const angle = Math.PI / 3;
  const axis = new Vector3(0, 0, 1);
  const unit = 2 * regularHexRadius + centralHexRadius; // adjusting the unit to account for the bigger central hexagon
  const axisVector = new Vector3(0, -unit, 0);
  const sideVector = new Vector3(0, unit, 0).applyAxisAngle(axis, -angle);
  const vec3 = new Vector3();
  const positions: Vector3D[] = [];

  const addUnique = (v: Vector3) => {
    if (!positions.some((p) => p.x === v.x && p.y === v.y && p.z === v.z)) {
      positions.push({ x: v.x, y: v.y, z: v.z });
    }
  };

  for (let seg = 0; seg < 6; seg++) {
    for (let ax = 1; ax <= circleCount; ax++) {
      for (let sd = 0; sd < ax; sd++) {
        vec3
          .copy(axisVector)
          .multiplyScalar(ax)
          .addScaledVector(sideVector, sd)
          .applyAxisAngle(axis, angle * seg + Math.PI / 6);
        addUnique(vec3);
      }
    }
  }

  positions.push({ x: 0, y: 0, z: 0 }); // central hex

  return positions;
};
export const createConnections = (
  hexagonPositions: Vector3D[],
  regularHexRadius: number
): [Vector3D, Vector3D][] => {
  const connections: [Vector3D, Vector3D][] = [];
  const thresholdDistance = 5 * regularHexRadius; // adjusted threshold

  for (let i = 0; i < hexagonPositions.length; i++) {
    const currentHexagon = hexagonPositions[i];
    const distances: { distance: number; hexagon: Vector3D }[] = [];

    // Compute distances to all other hexagons
    hexagonPositions.forEach((otherHexagon) => {
      if (currentHexagon !== otherHexagon) {
        const distance = Math.sqrt(
          Math.pow(otherHexagon.x - currentHexagon.x, 2) +
            Math.pow(otherHexagon.y - currentHexagon.y, 2) +
            Math.pow(otherHexagon.z - currentHexagon.z, 2)
        );

        distances.push({ distance, hexagon: otherHexagon });
      }
    });

    // Get the 6 closest hexagons
    const closestHexagons = distances
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 6);

    // Check if the distance is below the threshold and make a connection
    closestHexagons.forEach(({ distance, hexagon }) => {
      if (distance <= thresholdDistance) {
        connections.push([currentHexagon, hexagon]);
      }
    });
  }

  return connections;
};

export const findClosestHexagonCenter = (
  mouseX: number,
  mouseY: number,
  hexagonPositions: Vector3D[]
): Vector3D => {
  let closestHexagon: Vector3D | null = null;
  let minDistance = Infinity;

  hexagonPositions.forEach((hexPos) => {
    const distance = Math.sqrt(
      Math.pow(mouseX - hexPos.x, 2) + Math.pow(mouseY - hexPos.y, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestHexagon = hexPos;
    }
  });

  // Assuming a default position in case of unforeseen circumstances
  return closestHexagon || { x: 0, y: 0, z: 0 };
};
export const SkillsChartCameraSetter: React.FC<{
  circleCount: number;
  centralHexRadius: number;
  regularHexRadius: number;
}> = ({ circleCount, centralHexRadius, regularHexRadius }) => {
  const { camera } = useThree();

  useEffect(() => {
    const perspCamera = camera as PerspectiveCamera;

    // Estimate the grid's height
    const gridHeight = circleCount * (centralHexRadius + regularHexRadius);

    // Set the camera's Z-position to ensure the entire grid is visible
    perspCamera.position.z = 4 * gridHeight; // adjust multiplier as needed

    perspCamera.fov = 55;
    perspCamera.updateProjectionMatrix();
  }, [camera, circleCount, centralHexRadius, regularHexRadius]);

  return null;
};

export const findShortestPath = (
  graph: [Vector3D, Vector3D][],
  start: Vector3D,
  end: Vector3D
): [Vector3D, Vector3D][] => {
  const nodes = new Set<Vector3D>();
  const distances = new Map<Vector3D, number>();
  const previousNodes = new Map<Vector3D, Vector3D>();

  graph.forEach(([start, end]) => {
    nodes.add(start);
    nodes.add(end);
  });

  nodes.forEach((node) => {
    distances.set(node, Infinity);
  });

  distances.set(start, 0);

  const queue = new PriorityQueue<Vector3D>();
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue()!;
    const currentDistance = distances.get(currentNode);

    if (compareNodes(currentNode, end)) {
      break; // If we've found our target, stop.
    }

    for (const [nodeStart, nodeEnd] of graph) {
      let neighbor: Vector3D | null = null;
      if (compareNodes(currentNode, nodeStart)) neighbor = nodeEnd;
      if (compareNodes(currentNode, nodeEnd)) neighbor = nodeStart;

      if (!neighbor) continue;

      const newDistance = currentDistance! + 1;

      if (newDistance < distances.get(neighbor)!) {
        distances.set(neighbor, newDistance);
        previousNodes.set(neighbor, currentNode);
        const priority = newDistance + distance(neighbor, end);
        queue.enqueue(neighbor, priority);
      }
    }
  }

  const path: [Vector3D, Vector3D][] = [];
  let currentNode: Vector3D | null = end;

  while (currentNode !== null) {
    const previous = previousNodes.get(currentNode);
    if (previous) {
      path.unshift([previous, currentNode]);
    }
    currentNode = previous || null;
  }

  return path;
};
export const distance = (a: Vector3D, b: Vector3D): number => {
  return Math.sqrt(
    Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2)
  );
};

export const compareNodes = (a: Vector3D, b: Vector3D): boolean => {
  return a.x === b.x && a.y === b.y && a.z === b.z;
};
export const skills: Skill[] = [
  {
    layer: "central",
    name: "Programming",
    description:
      "Extensive expertise in Computer Science with proficiency in several programming languages and frameworks: C, C++, C#, JavaScript (React), Python, TensorFlow, Julia, Shell, HTML, and Flutter.",
    proficiency: 1,
    relevantExperience: [
      "Developed a real-time emissions monitor integrating with CETIP at BTG PACTUAL, boosting financial accuracy and predictive capabilities.",
      "Utilized a full stack of technologies including C#, PostgreSQL, Redis, and React to build intuitive swap pricing historical data visualizations at BTG PACTUAL.",
      "Architected the entire infrastructure for The Country Market on AWS, orchestrating a range of technologies: Kubernetes, Rancher, Jenkins, C#, React, and Flutter.",
    ],
  },
  {
    layer: "middle",
    skills: [
      {
        name: "Languages",
        description:
          "Impressive multilingual capabilities: Fluent in English and Portuguese, with intermediate proficiency in Spanish.",
        proficiency: 0.9,
        relevantExperience: [
          "Bilingual - English/Portuguese; Intermediate Spanish.",
        ],
      },
      {
        name: "Databases",
        description: "Strong skills with MongoDB, PostgreSQL, SQL, and Redis.",
        proficiency: 0.85,
        relevantExperience: [
          "Leveraged PostgreSQL and Redis to develop innovative financial systems at BTG PACTUAL.",
        ],
      },
      {
        name: "Cloud & Infrastructure",
        description:
          "Proficiency in AWS, Kubernetes, Rancher, and Jenkins, showcasing the ability to design, implement, and manage cloud infrastructure.",
        proficiency: 0.9,
        relevantExperience: [
          "Managed infrastructure development using AWS for enterprise projects.",
          "Architected the entire infrastructure for The Country Market on AWS, using tools like Kubernetes, Rancher, and Jenkins.",
        ],
      },
      {
        name: "Frameworks",
        description:
          "Proficient in .Net Framework, ASP.NET, React (front-end), and Flutter (mobile app development).",
        proficiency: 0.85,
        relevantExperience: [
          "Deployed .Net Framework, ASP.NET, and React for various projects at BTG PACTUAL.",
          "Designed mobile applications using Flutter for The Country Market.",
        ],
      },
      {
        name: "Financial Systems Development",
        description:
          "Remarkable experience with BTG PACTUAL, optimizing and developing advanced financial systems.",
        proficiency: 0.9,
        relevantExperience: [
          "Developed real-time emissions monitor integrating with CETIP at BTG PACTUAL.",
          "Constructed a credit-inventory system at BTG PACTUAL, resulting in daily savings of over $40,000.",
        ],
      },
      {
        name: "Entrepreneurship",
        description:
          "Dynamic entrepreneurial spirit showcased as the Co-founder of The Country Market, offering innovative AI & RFID integrated solutions.",
        proficiency: 0.88,
        relevantExperience: [
          "Initiated a revolutionary solution for food deserts in the rural US with The Country Market.",
          "Won the 'Mormon Holdings Most Innovative Idea of 2023' and secured a semi-finalist position in the prestigious McCloskey competition with The Country Market.",
        ],
      },
    ],
  },
  {
    layer: "outermost",
    skills: [
      {
        name: "Team Collaboration",
        description:
          "Adept at working within large teams and interdisciplinary units to achieve common goals.",
        proficiency: 0.8,
        relevantExperience: [
          "Collaborated with multidisciplinary teams at BTG PACTUAL for developing and optimizing financial systems.",
          "Worked alongside co-founders and diverse stakeholders for The Country Market initiative.",
        ],
      },
      {
        name: "Project Management",
        description:
          "Proven ability to manage and oversee projects from conception to completion.",
        proficiency: 0.8,
        relevantExperience: [
          "Managed infrastructure development projects using AWS for enterprise solutions.",
          "Oversaw the design and implementation of innovative solutions at The Country Market.",
        ],
      },
      {
        name: "Problem Solving",
        description:
          "Demonstrated ability to tackle complex challenges and provide innovative solutions.",
        proficiency: 0.85,
        relevantExperience: [
          "Solved intricate issues in financial systems development at BTG PACTUAL.",
          "Addressed food desert challenges in rural US with The Country Market.",
        ],
      },
      {
        name: "Continuous Learning",
        description:
          "Consistently update knowledge and skills to stay ahead in the technology and entrepreneurship sectors.",
        proficiency: 0.8,
        relevantExperience: [
          "Adapted to and learned new technologies for varied projects across BTG PACTUAL and The Country Market.",
        ],
      },
      {
        name: "Communication",
        description:
          "Effective communicator, adept at presenting technical information to diverse audiences.",
        proficiency: 0.8,
        relevantExperience: [
          "Regularly interfaced with stakeholders and team members to convey complex technical details clearly.",
        ],
      },
      {
        name: "Adaptability",
        description:
          "Quick to adapt to new environments, tools, and technologies, ensuring optimal performance and outcomes.",
        proficiency: 0.8,
        relevantExperience: [
          "Showcased flexibility by pivoting between different tech stacks and business environments.",
        ],
      },
      {
        name: "Time Management",
        description:
          "Proficient at prioritizing tasks and managing time to optimize productivity.",
        proficiency: 0.85,
        relevantExperience: [
          "Successfully managed multiple concurrent projects at BTG PACTUAL without missing deadlines.",
        ],
      },
      {
        name: "Mentorship",
        description:
          "Passionate about guiding junior team members and sharing knowledge.",
        proficiency: 0.8,
        relevantExperience: [
          "Mentored 5 junior developers at BTG PACTUAL, leading to increased team performance.",
        ],
      },
      {
        name: "Analytical Thinking",
        description:
          "Ability to dissect complex problems and derive actionable insights.",
        proficiency: 0.8,
        relevantExperience: [
          "Analyzed user behavior at The Country Market to improve product recommendations.",
        ],
      },
      {
        name: "Conflict Resolution",
        description:
          "Skilled at mediating disagreements and fostering a harmonious team environment.",
        proficiency: 0.8,
        relevantExperience: [
          "Resolved disputes in cross-functional teams, ensuring smooth project progression.",
        ],
      },
      {
        name: "Stakeholder Management",
        description:
          "Effective in managing expectations and building relationships with key stakeholders.",
        proficiency: 0.8,
        relevantExperience: [
          "Regularly liaised with high-level stakeholders at BTG PACTUAL to align project outcomes with business goals.",
        ],
      },
      {
        name: "Innovation",
        description:
          "Always looking for innovative solutions to traditional problems.",
        proficiency: 0.8,
        relevantExperience: [
          "Introduced a novel algorithm at The Country Market to optimize inventory management.",
        ],
      },
      {
        name: "Negotiation",
        description:
          "Capable of reaching beneficial agreements in business deals and project scopes.",
        proficiency: 0.8,
        relevantExperience: [
          "Negotiated with vendors for better terms, leading to 10% cost reduction at The Country Market.",
        ],
      },
      {
        name: "Networking",
        description:
          "Effectively forge and maintain beneficial professional relationships in the industry.",
        proficiency: 0.75,
        relevantExperience: [
          "Established valuable connections at tech conferences, leading to fruitful collaborations.",
        ],
      },
      {
        name: "Strategic Planning",
        description:
          "Ability to forecast future trends and plan accordingly to meet long-term objectives.",
        proficiency: 0.8,
        relevantExperience: [
          "Developed a 5-year strategic plan for The Country Market, aligning with industry forecasts.",
        ],
      },
      {
        name: "Cultural Awareness",
        description:
          "Understand and respect the diverse cultural backgrounds of team members and clients.",
        proficiency: 0.8,
        relevantExperience: [
          "Worked with international teams at BTG PACTUAL, fostering an inclusive work environment.",
        ],
      },
      {
        name: "Decision Making",
        description:
          "Confidently make decisions based on data, team input, and industry knowledge.",
        proficiency: 0.85,
        relevantExperience: [
          "Led decision-making processes for key projects at BTG PACTUAL and The Country Market.",
        ],
      },
      {
        name: "Risk Management",
        description:
          "Skilled at identifying potential risks and implementing strategies to mitigate them.",
        proficiency: 0.8,
        relevantExperience: [
          "Implemented risk management protocols for The Country Market's supply chain operations.",
        ],
      },
    ],
  },
];

export const getSkillByIndex = (index: number): SkillItem | null => {
  const middleLayerIndexes = [0, 3, 6, 9, 12, 15];
  const outermostLayerIndexes = [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17];

  if (index === 18)
    return {
      name: "Programming",
      description:
        "Extensive expertise in Computer Science with proficiency in several programming languages and frameworks: C, C++, C#, JavaScript (React), Python, TensorFlow, Julia, Shell, HTML, and Flutter.",
      proficiency: 1,
      relevantExperience: [
        "Developed a real-time emissions monitor integrating with CETIP at BTG PACTUAL, boosting financial accuracy and predictive capabilities.",
        "Utilized a full stack of technologies including C#, PostgreSQL, Redis, and React to build intuitive swap pricing historical data visualizations at BTG PACTUAL.",
        "Architected the entire infrastructure for The Country Market on AWS, orchestrating a range of technologies: Kubernetes, Rancher, Jenkins, C#, React, and Flutter.",
      ],
    };

  if (middleLayerIndexes.includes(index)) {
    const idx = middleLayerIndexes.indexOf(index);
    return (skills[1] as MiddleOrOuterSkill).skills[idx];
  }

  if (outermostLayerIndexes.includes(index)) {
    const idx = outermostLayerIndexes.indexOf(index);
    return (skills[2] as MiddleOrOuterSkill).skills[idx];
  }

  return null; // Return null if the index doesn't match any of the above
};
export const proficiencyToColor = (proficiency: number): string => {
  if (proficiency > 0.85) return "#0D8E15"; // Most proficient (Central layer)
  if (proficiency > 0.8) return "#34A72E"; // Highly proficient
  if (proficiency > 0.75) return "#63C24E"; // Very proficient (Top range of Middle layer)
  if (proficiency > 0.7) return "#96DD70"; // Quite proficient (Middle of Middle layer)
  if (proficiency > 0.6) return "#EBC200"; // Proficient (Lower range of Middle layer & Top range of Outermost layer)
  if (proficiency > 0.5) return "#E68900"; // Moderately proficient (Lower range of Outermost layer)
  return "#E61500"; // Least proficient
};

export const getEmissiveColor = (hovered: boolean, proficiency: number) => {
  return hovered ? proficiencyToColor(proficiency) : "black";
};
