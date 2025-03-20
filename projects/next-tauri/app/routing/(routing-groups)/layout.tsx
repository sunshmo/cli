import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function RoutingGroupLayout(props: IProps) {
  return (
    <div className="routing-group-layout">
      routing groups layout
      {props.children}
    </div>
  );
}
