import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ImageGallery from './ImageGallery'

function PropertyDetails({ property, onAddToFavourites, isFavourite }) {
  const images = property.picture ? [property.picture] : [];
  const [mainImage, setMainImage] = useState(images[0] || '/placeholder.jpg');

  const handleFavouriteClick = () => {
    if (!isFavourite) onAddToFavourites(property);
  };

  // Build date from JSON
  const addedDate = property.added
    ? new Date(`${property.added.month} ${property.added.day}, ${property.added.year}`)
    : null;

  return (
    <div className="property-details">
      {/* Header */}
      <div className="details-header">
        <div className="header-left">
          <h1 className="details-title">{property.location}</h1>
          <p className="details-type">{property.type}</p>
        </div>
        <div className="header-right">
          <h2 className="details-price">£{property.price.toLocaleString()}</h2>
          <button
            onClick={handleFavouriteClick}
            className={`favourite-button ${isFavourite ? 'active' : ''}`}
            disabled={isFavourite}
          >
            {isFavourite ? '★ Favourited' : '☆ Add to Favourites'}
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <ImageGallery images={images} mainImage={mainImage} setMainImage={setMainImage} />

      {/* Quick Info */}
      <div className="quick-info">
        <div className="info-item">
          <span className="info-icon">🛏️</span>
          <div>
            <p className="info-label">Bedrooms</p>
            <p className="info-value">{property.bedrooms}</p>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">📍</span>
          <div>
            <p className="info-label">Location</p>
            <p className="info-value">{property.location}</p>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">📅</span>
          <div>
            <p className="info-label">Added</p>
            <p className="info-value">
              {addedDate
                ? addedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                : 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="short-description">
        <h3>Description</h3>
        <p>{property.description}</p>
      </div>

      {/* Tabs */}
      <div className="tabbed-content">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          {/* Description Tab */}
          <TabPanel>
            <div className="tab-content">
              <h3>Full Property Description</h3>
              <p>{property.description}</p>
              <div className="features-grid">
                <div className="feature-item">
                  <h4>Property Type</h4>
                  <p>{property.type}</p>
                </div>
                <div className="feature-item">
                  <h4>Price</h4>
                  <p>£{property.price.toLocaleString()}</p>
                </div>
                <div className="feature-item">
                  <h4>Bedrooms</h4>
                  <p>{property.bedrooms}</p>
                </div>
                <div className="feature-item">
                  <h4>Location</h4>
                  <p>{property.location}</p>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Floor Plan Tab */}
          <TabPanel>
            <div className="tab-content">
              <h3>Floor Plan</h3>
              <img
                src="/placeholder-floorplan.jpg"
                alt="Floor plan"
                className="floorplan-image"
              />
            </div>
          </TabPanel>

          {/* Map Tab */}
          <TabPanel>
            <div className="tab-content">
              <h3>Location Map</h3>
              <div className="map-placeholder">
                <div className="map-icon">📍</div>
                <p className="map-location">{property.location}</p>
                <p className="map-note">Map integration requires Google Maps API key</p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertyDetails
