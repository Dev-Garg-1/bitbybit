✅ **`README.md` for Your Razorpay Payment Integration Project**

---

# 💳 **Razorpay Payment Integration with MERN Stack**

This project demonstrates how to integrate **Razorpay Payment Gateway** with a **MERN stack** application. It handles creating orders, processing payments, and verifying payment status.

---

## 🚀 **Features**
- 💰 Razorpay payment gateway integration  
- 🛒 Order creation and payment handling  
- ✅ Payment verification using Razorpay signature  
- 🔥 MongoDB connection with Mongoose  
- 🔐 Secure environment variables using `.env`  
- 📦 Backend API with **Express.js**  
- ⚛️ Frontend built with **React.js** (using Vite)  

---

## 🛠️ **Tech Stack**
- **Frontend:** React.js, Axios, Vite  
- **Backend:** Node.js, Express.js, MongoDB  
- **Payment Gateway:** Razorpay  
- **Environment Variables:** `.env`  

---


## ⚙️ **Installation and Setup**

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/sagarjain03/bitbybit.git
cd bitbybit
```

### 2️⃣ **Backend Setup**
1. Navigate to the backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file and add the following:
```plaintext
MONGODB_URI=<YOUR_MONGODB_URI>
PORT=5000
JWT_SECRET=<YOUR_JWT_SECRET>
RAZORPAY_KEY_ID=<YOUR_RAZORPAY_KEY_ID>
RAZORPAY_KEY_SECRET=<YOUR_RAZORPAY_KEY_SECRET>
```
4. Start the backend server:
```bash
npm run dev
```

### 3️⃣ **Frontend Setup**
1. Navigate to the frontend folder:
```bash
cd ../frontend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file and add the following:
```plaintext
RAZORPAY_KEY_ID = "your_razorpay_key_id"
RAZORPAY_KEY_SECRET = "your_razorpay_key_secret"
```
4. Start the frontend server:
```bash
npm run dev
```

---

## 💡 **Usage**
1. Go to `http://localhost:5173` in your browser.  
2. Click the **Pay Now** button.  
3. Complete the payment using Razorpay test mode.  
4. Payment verification happens on the backend.  
5. You'll see a **success message** for valid payments and an **error alert** if the payment fails.

---

## 🔥 **Environment Variables**
Create two `.env` files (one for the backend, one for the frontend) with the following variables:

### ✅ **Backend `.env`**
```plaintext
MONGODB_URI=<YOUR_MONGODB_URI>
PORT=5000
JWT_SECRET=<YOUR_JWT_SECRET>
RAZORPAY_KEY_ID=<YOUR_RAZORPAY_KEY_ID>
RAZORPAY_KEY_SECRET=<YOUR_RAZORPAY_KEY_SECRET>
```

### ✅ **Frontend `.env`**
```plaintext
VITE_BACKEND_URL=http://localhost:5000
```

---


## 🔥 **Dependencies**
- **Backend:**  
```json
"express": "^4.18.2",  
"mongoose": "^7.0.0",  
"razorpay": "^2.3.0",  
"dotenv": "^16.0.0"  
```

- **Frontend:**  
```json
"axios": "^1.4.0",  
"react": "^18.2.0",  
"vite": "^4.4.9"  
```

---

## 🤝 **Contributing**
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m "Add new feature"`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Create a Pull Request.  

---

## 📃 **License**
This project is licensed under the **MIT License**.

---



