interface HeaderProps {
  title: string;
  text?: string;
}

export function HeaderSection({ title, text }: HeaderProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      {text ? (
        <p className="text-muted-foreground font-medium">{text}</p>
      ) : null}
    </div>
  );
}
