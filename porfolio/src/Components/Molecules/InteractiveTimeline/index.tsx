import { AnimatePresence, motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";
import {
  TimelineContainer,
  VerticalLine,
  Node,
  InteractiveCard,
  ConnectingLine,
} from "./styles";

const events = [
  {
    date: "Jun - Aug 2019",
    title: "FIC Trading Summer Analyst at A3S Investimentos",
    description:
      "Learned about investment strategies focusing on hedging options for FIC trading based on interest rate curves and currency pairings. Devised portfolio diversification strategies for a broad spectrum of investors.",
  },
  {
    date: "Jan - Oct 2021",
    title:
      "Business Fundraiser Analyst at Brazilian Student Association (BRASA)",
    description:
      "Led sponsorship drives to fund international scholarships for deserving Brazilian students. Successfully raised over half a million reais in 6 months, enabling over 12 students to chase their academic aspirations.",
  },
  {
    date: "May - Aug 2022",
    title: "Front Trading System Summer Analyst at BTG PACTUAL",
    description:
      "Enhanced trading systems using languages like C# and JavaScript. Constructed a credit-inventory system saving the bank over $40,000 daily. Developed three essential apps for the Rates Trading Division, which facilitated operation logging and hedge position computation.",
  },
  {
    date: "Aug 2022 - Present",
    title: "Classroom Triage IT Support at OIT Help Desk, Notre Dame",
    description:
      "Offered essential IT support for Notre Dame University Classrooms. Addressed various tech problems ranging from hardware issues to advanced digital classroom system glitches.",
  },
  {
    date: "Aug 2022 - Present",
    title: "Co-Founder and CTO at The Country Market, Notre Dame",
    description:
      'Conceptualized a novel solution for rural food deserts: an AI and RFID integrated autonomous store system. Orchestrated the entire tech infrastructure on AWS, blending technologies such as Kubernetes, Rancher, Jenkins, C#, React, and Flutter. This project was lauded as the "Mormon Holdings Most Innovative Idea of 2023" and was a semi-finalist in the prestigious McCloskey competition.',
  },
  {
    date: "May - Aug 2023",
    title: "Front Trading System Summer Analyst at BTG PACTUAL",
    description:
      "Built a real-time emissions monitor that integrated with CETIP, enhancing financial accuracy and predictive capacities. Innovated the decision-making process with dynamic swap rate calculations on the DI curve. Employed a full-stack of tech including C#, PostgreSQL, Redis, and React to craft intuitive swap pricing historical data visualizations.",
  },
];

const InteractiveTimeline: React.FC = () => {
  return (
    <TimelineContainer>
      <VerticalLine />

      {[...events].reverse().map((event, index) => (
        <React.Fragment key={index}>
          <Node index={index} total={events.length}>
            <span>{event.date}</span>
          </Node>

          <ConnectingLine index={index} total={events.length} />

          <InteractiveCard
            as={motion.div}
            initial={{ opacity: 0.8, x: index % 2 === 0 ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
            index={index}
            total={events.length}
          >
            <h3>{event.title}</h3>
          </InteractiveCard>
        </React.Fragment>
      ))}
    </TimelineContainer>
  );
};

export default InteractiveTimeline;
