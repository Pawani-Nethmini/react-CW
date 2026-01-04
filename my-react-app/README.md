**Estate Agent Portal - React Web** Application
A responsive double-page property search application built using React, featuring advanced filtering, drag-and-drop favorites management, and detailed property views.

**Live Demo & Repository**
Live Site: https://your-deployment-url.vercel.app/
GitHub: https://github.com/yourusername/estate-agent-portal

**Overview**
The Estate Agent Portal is a modern property search application that allows users to browse properties, apply multiple filters simultaneously, view detailed property information with image galleries and floor plans, and manage a favorites list through an intuitive drag-and-drop interface. All functionality is implemented client-side using React.

**Key Features**

# Property Search & Filtering
Filter properties by type, price range, number of bedrooms, postcode area, and date added
Real-time filtering using React state and controlled form inputs
Works with any combination of 1-6 filter criteria simultaneously
Smart validation for bedroom count and price ranges

# Enhanced React UI Widgets
Material-UI (MUI) components for modern form controls
Dropdown selectors with hover effects for property type and bedroom counts
Native HTML5 date inputs for date range selection
Number inputs with min/max validation for price and bedroom filters

# Property Listings
Responsive grid layout using CSS Grid
Property cards display thumbnail image, type, bedroom count with icon, price, and short description
Drag-and-drop functionality to add properties to favorites
Interactive hover effects with elevation and scale transforms
Integrated Google Maps link for each property location
Heart icon button for quick favorite addition

# Property Details View
Large image gallery with 6-8 images per property
Thumbnail navigation with active state highlighting
Tabbed interface using react-tabs library for Description, Floor Plan, and Location views
Embedded Google Maps iframe with proper location encoding
Dynamic image switching on thumbnail click
"Add to Favourites" button with disabled state when already favorited
Back navigation to return to search results

# Favourites Management
Drag properties from search results directly to favorites sidebar
Click heart icon to add properties to favorites
Individual "Delete" button for each favorite item
"Clear List" button to remove all favorites at once
Real-time count display showing number of saved properties
Favorites persist during session using React state
Duplicate prevention - properties cannot be added twice
Click on favorite property name to view full details
Visual drag-over indication with dashed border effect

# Responsive Design
Desktop layout: 2-column grid with sidebar (Search/Favorites)
Tablet/Mobile: Single-column stacked layout
CSS Grid and Flexbox for flexible, adaptive layouts
Media queries for breakpoints at 1024px, 768px, and 480px
Optimized image heights and card spacing for mobile devices
Touch-friendly button sizes on smaller screens

# Visual Design
Modern gradient-based color scheme with blue primary colors
Smooth transitions and animations throughout the interface
Card elevation effects on hover for depth perception
Custom styled form inputs with focus states
Professional header with gradient background and tagline
Consistent spacing and typography using system fonts

**Technology Used**
React 18.x - Component-based UI framework with hooks
React DOM 18.x - DOM rendering for React
Material-UI (MUI) 5.x - Enhanced UI component library for forms
React Tabs 6.x - Tabbed interface component
Vite 5.x - Fast development server and build tool
CSS3 - Custom styling with Grid, Flexbox, gradients, and animations
HTML5 - Semantic markup and drag-and-drop API
Google Maps - Embedded map integration
JSON - Local data storage for property information

**Usage Guide**

# Searching Properties
Use the search form sidebar to set filter criteria
Select property type from dropdown (Any/House/Flat)
Enter min/max price range (£270,000 - £830,000)
Choose bedroom count range (1-5)
Enter postcode area (e.g., BR1, BR5, BR7)
Select date range for when properties were added
Click "Search Properties" to apply filters

# Adding to Favorites
Method 1: Click the heart (❤) icon on any property card
Method 2: Drag a property card and drop it onto the favorites sidebar
Visual feedback provided for both methods

# Viewing Details
Click "View Details" button on any property card
Browse image gallery by clicking thumbnails
Switch between Description, Floor Plan, and Location tabs
View embedded Google Map showing property location
Click "Back to Search" to return to results

# Managing Favorites
View favorites count in sidebar header
Click property name to view its details
Click "Delete" to remove individual favorites
Click "Clear List" to remove all favorites at once

**Known Limitations**
Favorites are session-based only (not persisted to localStorage)
Google Maps API key is set to placeholder (needs valid key for production)
Limited to 7 properties in demo dataset
Floor plans manually mapped by property ID

**Deployment**
The application is deployed on Vercel:
    Connect GitHub repository to Vercel
    Configure build settings:
        Build Command: npm run build
        Output Directory: dist
    Deploy automatically on push to main branch

**Author**
Pawani Nethmini
20240164 /w2120117
Advanced Client Side - Final CW