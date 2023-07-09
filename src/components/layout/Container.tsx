interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-screen-lg mx-auto h-full">{children}</div>;
};
