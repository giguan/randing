import Image from 'next/image';

function Banner() {
    return (
      <div className="mb-8">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-1">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image src="/images/배너모집.png" width={500} height={300} style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Banner;