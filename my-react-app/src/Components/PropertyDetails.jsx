import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import "../styles/propertyDetails.css"
import ImageGallery from "./ImageGallery";

function PropertyDetails({ property, onBack, onFavourite }) {
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(property.location)}`;

    // Add floor plans list
    const floorPlanMap = {
        prop1: "/images/floorplan1.jpg",
        prop2: "/images/floorplan2.jpg",
        prop3: "/images/floorplan3.jpg",
        prop4: "/images/floorplan4.jpg",
        prop5: "/images/floorplan5.jpg",
        prop6: "/images/floorplan6.jpg",
        prop7: "/images/floorplan7.jpg",
    };
    const floorPlan = floorPlanMap[property.id];

    return (
        <div className="property-details">
            <button className="back-btn" onClick={onBack}>← Back to Search</button>
      
        <div className="details-header">
            <h1>{property.type} in {property.location}</h1>
            <p className="price">£{property.price.toLocaleString()}</p>
        </div>

        {/* Gallery with 6-8 images [cite: 43, 44, 119] */}
        <ImageGallery images={property.images || [property.picture]} />

        <button className="favourite-btn" onClick={() => onFavourite(property)}>
            Add to Favourites ❤
        </button>

        {/* Mandatory React Tabs Implementation [cite: 45, 76, 124] */}
        <Tabs className="property-tabs">
            <TabList>
                <Tab>Description</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Location</Tab>
            </TabList>

            <TabPanel>
                <div className="tab-content">
                    <h3>Property Description</h3>
                    <p>{property.description}</p>
                    <p><strong>Tenure:</strong> {property.tenure}</p>
                    <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="tab-content">
                    <h3>Floor Plan</h3>
                    {floorPlan ? (
                        <img
                            src={floorPlan}
                            alt={`Floor plan for ${property.type}`}
                            className="single-floor-plan"
                        />
                    ) : (
                        <p>No floor plan available</p>
                    )}
                </div>
            </TabPanel>

            <TabPanel>
                <div className="tab-content">
                    <h3>Google Map</h3>
                    <iframe
                        title="Property Location"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://maps.google.com/maps?q=${property.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    />
                </div>
            </TabPanel>
        </Tabs>
    </div>
  );
}

export default PropertyDetails;
