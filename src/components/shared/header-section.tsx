interface HeaderProps {
  title: string;
  text?: string;
}

export function HeaderSection({ title, text }: HeaderProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      {text ? (
        <p className="font-medium text-muted-foreground">{text}</p>
      ) : null}
    </div>
  );
}
