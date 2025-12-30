import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import propertyData from '../data/properties.json';

const PropertyPage = () => {
  const { id } = useParams();
  const property = propertyData.properties.find(p => p.id === parseInt(id));

  if (!property) return <div>Property not found</div>;

  return (
    <div className="container padding">
      <div className="back">
        <img src={property.mainImage} alt={property.type} />
        <div className="container">
          <h1>{property.type} - £{property.price.toLocaleString()}</h1>
        </div>
      </div>

      <Tabs className="mtop">
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.longDescription}</p>
        </TabPanel>
        <TabPanel>
          <img src={property.floorPlan} alt="Floor Plan" style={{width: '50%'}} />
        </TabPanel>
        <TabPanel>
          
          <div className="map-placeholder">Google Map Integration Here</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};