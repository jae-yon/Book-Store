import { useState } from 'react';
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa';
import Button from '@/components/common/Button';

interface Props {
  children: React.ReactNode;
  linelimit: number;
}

function EllipsisBox({ children, linelimit }: Props) {

  const [expanded, setExpanded] = useState(false);
  
  return (
    <EllipsisBoxStyle linelimit={linelimit} $expanded={expanded}>
      <p>{children}</p>
      <div className="toggle">
        <Button className="toggleButton" size="small" scheme="normal" onClick={() => setExpanded(!expanded)}>
          { expanded ? "접기" : "펼치기" } <FaAngleDown /> 
        </Button>
      </div>
    </EllipsisBoxStyle>
  )
}

interface EllipsisBoxStyleProps {
  linelimit: number;
  $expanded: boolean;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ linelimit, $expanded }) => $expanded ? "none" : linelimit};
    -webkit-box-orient: vertical;
    padding: 20px 0 0 0;
    margin: 0;
  }

  .toggle {
    display: flex;
    justify-content: end;
    svg {
      transform: ${({ $expanded }) => $expanded ? "rotate(180deg)" : "rotate(0)"};
    }
  }

  .toggleButton {
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
`;

export default EllipsisBox;