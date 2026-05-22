<div align="center">
  <img src="https://img.icons8.com/color/96/000000/product--v1.png" alt="Logo">
  <h1>StockMatrix</h1>
  <p><b>Advanced Inventory Management System</b></p>
  
  <p>
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8-purple?style=for-the-badge&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js" alt="Node" />
    <img src="https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?style=for-the-badge&logo=mongodb" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  </p>
</div>

<br/>

## 📖 Project Overview

**StockMatrix** is a modern, responsive Software-as-a-Service (SaaS) styled Inventory Management System. It provides businesses with a seamless and intuitive dashboard to track, manage, and optimize their product inventory. The application features a sleek dark-themed UI tailored for optimal user experience and high productivity.

## 🎯 Assessment Objective

> **Note:** This project was developed as part of the **Internship Mini Assessment** for **Dev Creations and Solutions**.

The primary goal of this assessment is to demonstrate proficiency in full-stack web development using the MERN stack (MongoDB, Express, React, Node.js) combined with modern tooling like Vite and Tailwind CSS. The application showcases end-to-end functionality including RESTful API design, database modeling, state management, and responsive UI/UX implementation.

---

## 📸 Screenshots

| Dashboard View | Add Product Modal |
| :---: | :---: |
| *(Replace with your screenshot: `![Dashboard](./screenshots/dashboard.png)`)* | *(Replace with your screenshot: `![Add Product](./screenshots/add-product.png)`)* |

| Product List | Low Stock Alerts |
| :---: | :---: |
| *(Replace with your screenshot: `![Product List](./screenshots/products.png)`)* | *(Replace with your screenshot: `![Low Stock](./screenshots/low-stock.png)`)* |

---

## ✨ Features

- 📦 **CRUD Operations**: Complete functionality to **Add**, **View**, **Update**, and **Delete** products.
- 🔍 **Search & Filter**: Real-time product searching and category-based filtering.
- ⚠️ **Low Stock Highlighting**: Automatic visual indicators for products that fall below their minimum stock threshold.
- 🎨 **Modern SaaS UI**: A professional, responsive, and aesthetically pleasing dark theme dashboard built with Tailwind CSS.
- 🚀 **RESTful APIs**: Robust backend architecture using Express.js.
- 🗄️ **NoSQL Database**: Efficient data modeling and storage using MongoDB and Mongoose.
- 📱 **Fully Responsive**: Optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Notifications**: React Toastify

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Middleware**: CORS, Dotenv, Custom Error Handler

---

## 📂 Folder Structure

```text
📦 stockmatrix
├── 📂 backend                  # Node.js Express Server
│   ├── 📂 config               # Database configuration
│   ├── 📂 controllers          # Request handlers / Logic
│   ├── 📂 middleware           # Express middlewares (e.g., error handler)
│   ├── 📂 models               # Mongoose schemas
│   ├── 📂 routes               # API route definitions
│   ├── .env                    # Backend environment variables
│   └── server.js               # Backend entry point
├── 📂 public                   # Static assets
├── 📂 src                      # React Frontend
│   ├── 📂 assets               # Images, SVGs
│   ├── 📂 components           # Reusable UI components
│   ├── 📂 pages                # Application views/pages
│   ├── 📂 services             # API service calls (Axios)
│   ├── 📂 utils                # Helper functions
│   ├── App.jsx                 # Main React Component
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML template
├── package.json                # Frontend dependencies & scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── vite.config.js              # Vite configuration
```

---

## 🚀 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/stockmatrix.git
cd stockmatrix
```

### 2. Setup the Backend
```bash
cd backend
npm install
```

### 3. Setup the Frontend
Open a new terminal in the project root (`stockmatrix` directory):
```bash
npm install
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
Create a `.env` file in the `backend` directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend (`.env` - optional)
By default, the Vite server proxies requests or uses a hardcoded API URL in the services. If you need to configure the API URL globally, create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Fetch all products |
| `POST` | `/api/products` | Create a new product |
| `GET` | `/api/products/low-stock` | Fetch products with low stock |
| `PUT` | `/api/products/:id` | Update an existing product |
| `DELETE` | `/api/products/:id` | Delete a product |

---

## 🏃‍♂️ Run Instructions

### Start the Backend Server
```bash
cd backend
npm run dev
```
*The server will start on `http://localhost:5000`*

### Start the Frontend Application
Open a new terminal in the root directory:
```bash
npm run dev
```
*The frontend will run on `http://localhost:5173`*

---

## 🧠 Assumptions Made

- **Authentication**: User authentication/authorization is currently omitted to focus strictly on inventory management functionality for the assessment.
- **Stock Threshold**: "Low stock" is determined by a predefined threshold field within the product schema (or dynamically calculated based on business logic).
- **Database**: Assumed a cloud MongoDB Atlas cluster is primarily used for testing, though a local instance works identically.

---

## 🔮 Future Improvements

- [ ] **Authentication & Roles**: Implement JWT-based login with Admin/Staff roles.
- [ ] **Data Export**: Add the ability to export inventory data to CSV/Excel.
- [ ] **Analytics Dashboard**: Introduce charts (e.g., using Recharts or Chart.js) to visualize inventory trends and sales.
- [ ] **Supplier Management**: Module to track and manage product suppliers and purchase orders.
- [ ] **Pagination**: Add server-side pagination for the product list to handle large datasets effectively.

---

## 👨‍💻 Author

**StockMatrix** was designed and developed for the Dev Creations and Solutions Internship Mini Assessment.

*Feel free to star ⭐ this repository if you find it useful!*
