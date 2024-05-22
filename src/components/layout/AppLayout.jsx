import Header from "../header/Header";
import Footer from "../footer/Footer"; 

const AppLayout = (WrappedComponent) => {
  const WithLayout = (props) => (
    <div>
      <Header />
      <WrappedComponent {...props} />
      <Footer />
    </div>
  );

  // Set the display name for easier debugging
  WithLayout.displayName = `WithLayout(${getDisplayName(WrappedComponent)})`;

  return WithLayout;
};

// Helper function to get the display name
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default AppLayout;
