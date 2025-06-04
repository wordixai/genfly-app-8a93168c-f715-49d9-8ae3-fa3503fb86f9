interface RecipeCardProps {
  title: string;
  image: string;
  date: string;
  creator?: string;
  href: string;
}

const RecipeCard = ({ title, image, date, creator, href }: RecipeCardProps) => {
  return (
    <div className="mb-6">
      <div className="bg-neutral-100 shadow rounded-lg overflow-hidden">
        <div className="aspect-square">
          <a className="block w-full h-full" href={href}>
            <img 
              alt={title}
              loading="lazy" 
              width="400" 
              height="400" 
              className="w-full h-full object-cover"
              src={image}
            />
          </a>
        </div>
        <div className="py-1 px-3">
          <div className="font-bold text-base mb-1 truncate">
            <a className="text-neutral-900 hover:text-fuchsia-700 transition no-underline" href={href}>
              {title}
            </a>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-neutral-500">{date}</span>
            {creator && (
              <span className="text-neutral-700">
                <a className="text-neutral-700 font-bold hover:text-fuchsia-700 no-underline ml-2" href="#">
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