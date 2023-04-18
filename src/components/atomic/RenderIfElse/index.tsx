interface RenderIfElseProps {
  condition: boolean;
  renderIf: React.ReactNode;
  renderElse: React.ReactNode;
}

export function RenderIfElse({
  condition,
  renderIf,
  renderElse,
}: RenderIfElseProps) {
  return <>{Boolean(condition) ? renderIf : renderElse}</>;
}
