interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="h-full max-w-screen-lg mx-auto">{children}</div>;
};
