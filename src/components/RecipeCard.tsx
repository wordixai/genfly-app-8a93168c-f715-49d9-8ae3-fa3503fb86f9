interface RecipeCardProps {
  title: string;
  image: string;
  date: string;
  creator?: string;
  href: string;
}

const RecipeCard = ({ title, image, date, creator, href }: RecipeCardProps) => {
  return (
    <div className="tw-mb-6">
      <div className="tw-bg-neutral-100 tw-shadow tw-rounded-lg tw-overflow-hidden">
        <div className="tw-aspect-square">
          <a className="tw-block tw-w-full tw-h-full" href={href}>
            <img 
              alt={title}
              loading="lazy" 
              width="400" 
              height="400" 
              className="tw-w-full tw-h-full tw-object-cover"
              src={image}
            />
          </a>
        </div>
        <div className="tw-py-1 tw-px-3">
          <div className="tw-font-bold tw-text-base tw-mb-1 tw-truncate">
            <a className="tw-text-neutral-900 hover:tw-text-fuchsia-700 tw-transition tw-no-underline" href={href}>
              {title}
            </a>
          </div>
          <div className="tw-flex tw-justify-between tw-items-center tw-text-xs">
            <span className="tw-text-neutral-500">{date}</span>
            {creator && (
              <span className="tw-text-neutral-700">
                <a className="tw-text-neutral-700 tw-font-bold hover:tw-text-fuchsia-700 tw-no-underline tw-ml-2" href="#">
                  {creator}
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;