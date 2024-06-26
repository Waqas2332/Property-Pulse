import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
  const response = await fetchProperties();
  const { properties } = response;

  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
