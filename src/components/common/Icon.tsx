type IconProps<IconName extends string = string> = {
  mapper: Record<IconName, string>;
  name: IconName;
};

const Icon = <IconName extends string>({ mapper, name }: IconProps<IconName>) => {
  return <img src={mapper[name]} alt={name} />;
};

export default Icon;
