import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import data from '../data/properties.json';
import './PropertyPage.css';

const PropertyPage = ({ favorites, onToggleFav }) => {
  const { id } = useParams();
  const property = data.properties.find(p => p.id === id);
  const [mainImg, setMainImg] = useState(property?.mainImage);

  if (!property) return <h2>Property not found</h2>;

  return (
    <div className="container padding">
      <Link to="/">← Back to Search</Link>
      <div className="flex mtop">
        <div style={{ width: '60%' }}>
          <img src={mainImg} alt="Main" style={{ height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
          <div className="grid4 mtop">
            {property.images.map((img, i) => (
              <img key={i} src={img} onClick={() => setMainImg(img)} style={{ height: '80px', cursor: 'pointer' }} />
            ))}
          </div>
        </div>
        <div style={{ width: '35%' }}>
          <h1>{property.type}</h1>
          <h2 style={{ color: '#27ae60' }}>£{property.price.toLocaleString()}</h2>
          <p>{property.location}</p>
          <button className="btn5 mtop" onClick={() => onToggleFav(property)}>
            {favorites.some(f => f.id === property.id) ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </div>

      <Tabs className="mtop">
        <TabList>
          <Tab>Full Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Google Map</Tab>
        </TabList>
        <TabPanel><p className="padding">{property.longDescription}</p></TabPanel>
        <TabPanel><img src={property.floorPlan} alt="Floorplan" className="padding" /></TabPanel>
        <TabPanel>
          <div className="padding" style={{ height: '300px', background: '#eee' }}>
            Interactive Google Map Placeholder (NW1 Area)
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PropertyPage;