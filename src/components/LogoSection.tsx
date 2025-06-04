const LogoSection = () => {
  return (
    <div className="shoutouts">
      <div className="max-w-7xl mx-auto grid gap-x-8 gap-y-4 py-2 xs:grid-cols-2 xs:gap-x-4 xs:gap-y-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=180&h=60&fit=crop&crop=center" 
            width="180" 
            alt="Guardian Logo" 
            className="shoutouts-logo h-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-center hidden sm:flex">
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=90&h=60&fit=crop&crop=center" 
            width="90" 
            alt="MSN Logo" 
            className="shoutouts-logo h-8 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=75&h=60&fit=crop&crop=center" 
            width="75" 
            alt="CNN Logo" 
            className="shoutouts-logo h-8 object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center" 
            width="120" 
            alt="NPR Logo" 
            className="shoutouts-logo h-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;