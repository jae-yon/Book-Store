import React, { useState } from "react";
import styled from "styled-components";

interface TabProps {
  title: String;
  children: React.ReactNode;
}

function Tab({ children }: TabProps ) {
  return (
    <>
      {children}
    </>
  );
}

interface TabsProps {
  children: React.ReactNode;
}

function Tabs({ children }: TabsProps) {

  const [activeIndex, setActiceIndex] = useState(0);

  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <TabsStyle>
      <div className="tab-header">
        {
          tabs.map((tab, index) => (
            <button 
              key={index}
              onClick={() => setActiceIndex(index)}
              className={activeIndex === index ? "active" : ""}
            >
              {tab.props.title}
            </button>
          ))
        }
      </div>
      <div className="tab-content">
        { tabs[activeIndex] }
      </div>
    </TabsStyle>
  );
}

const TabsStyle = styled.div`
  .tab-header {
    display: flex;
    gap: 2px;
    border-bottom: 1px solid #DDD;
  }

  button {
    border: none;
    background: #DDD;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color.text};
    border-radius: 
      ${({ theme }) => theme.borderRadius.default} 
      ${({ theme }) => theme.borderRadius.default} 
      0 0;
    padding: 12px 24px;

    &.active {
      color: #FFF;
      background: ${({ theme }) => theme.color.primary};
    }
  }

  .tab-content {
    padding: 24px 0;
  }
`;

export { Tab, Tabs };