import Image from "next/image";

const PropertyHeaderImage = ({ image }) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            width={0}
            height={0}
            alt=""
            className="object-cover h-[400px] w-full"
            sizes="100vh"
            priority="true"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
