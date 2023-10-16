type EmptyProps = {
  label: string;
};

export const Empty = ({label}: EmptyProps) => {
  return <h3 className="text-xl text-center">{label}</h3>;
};
