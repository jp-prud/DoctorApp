interface RenderIfElseProps {
  condition: boolean;
  renderIf: JSX.Element;
  renderElse: JSX.Element;
}

export function RenderIfElse({
  condition,
  renderIf,
  renderElse,
}: RenderIfElseProps) {
  return condition ? renderIf : renderElse;
}
