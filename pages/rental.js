import RentalPage from "@/components/templates/RentalPage";

const Rental = ({ car }) => {
  return <>{<RentalPage car={car} />}</>;
};

export default Rental;

// Get Server Side Props

export async function getServerSideProps({ query }) {
  if (!Object.keys(query).length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { car: query },
  };
}
