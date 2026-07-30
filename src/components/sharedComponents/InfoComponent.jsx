function InfoComponent({
  desc,
  icon,
  padding
}) {
  return <div className={`${padding} flex items-center gap-1 xl:gap-1.5 bg-Grey-10 w-fit rounded-[28px] border border-Grey-15 urbanist text-sm xl:text-lg font-medium`}>
            {icon}<p>{desc}</p>
        </div>;
}
export default InfoComponent;
