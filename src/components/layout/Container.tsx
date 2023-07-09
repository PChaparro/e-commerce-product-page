interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-screen-lg mx-auto p-4 h-full">{children}</div>;
};
