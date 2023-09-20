import React, {ReactNode} from "react";

type SectionProps = {
  children: ReactNode;
  title: string;
  pre?: string;
  component?: ReactNode;
  content: ReactNode;
};

export const Section = ({
  children,
  title,
  pre,
  component,
  content,
}: SectionProps) => {
  return (
    <div className="py-16">
      <div className="flex gap-2 flex-col pb-8">
        <h2 className="text-2xl">{title}</h2>
        {pre && <p className="text-sm text-gray-500">{pre}</p>}
        {content}
        {children}
      </div>
    </div>
  );
};
