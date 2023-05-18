interface RenderIfProps {
  condition: boolean;
  renderIf: JSX.Element;
}

export function RenderIf({ condition, renderIf }: RenderIfProps) {
  return condition ? renderIf : null;
}
