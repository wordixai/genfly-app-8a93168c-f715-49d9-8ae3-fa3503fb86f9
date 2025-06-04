const LogoSection = () => {
  return (
    <div className="shoutouts">
      <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-x-8 tw-gap-y-4 tw-py-2 xs:tw-grid-cols-2 xs:tw-gap-x-4 xs:tw-gap-y-4 sm:tw-grid-cols-2 md:tw-grid-cols-4">
        <div className="tw-flex tw-items-center tw-justify-center">
          <img 
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=180&h=60&fit=crop&crop=center" 
            width="180" 
            alt="Guardian Logo" 
            className="shoutouts-logo tw-h-12 tw-object-contain"
          />
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-hidden sm:tw-flex">
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=90&h=60&fit=crop&crop=center" 
            width="90" 
            alt="MSN Logo" 
            className="shoutouts-logo tw-h-8 tw-object-contain"
          />
        </div>
        <div className="tw-flex tw-items-center tw-justify-center">
          <img 
            src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=75&h=60&fit=crop&crop=center" 
            width="75" 
            alt="CNN Logo" 
            className="shoutouts-logo tw-h-8 tw-object-contain"
          />
        </div>
        <div className="tw-flex tw-items-center tw-justify-center">
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center" 
            width="120" 
            alt="NPR Logo" 
            className="shoutouts-logo tw-h-10 tw-object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;