type imageContextOptions = 'calendar';

export interface EmptyStateProps {
  title: string;
  description: string;
  imageContext: imageContextOptions;
  button: {
    label: string;
    redirectPage: string;
  };
}
