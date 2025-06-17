# Google Authentication Setup Guide

## Overview
Your calorie tracker now includes Google authentication using Firebase Auth. This guide will help you set up Firebase and configure Google login.

## 🔧 **Setup Steps**

### 1. **Create a Firebase Project**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "calorie-tracker")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

### 2. **Enable Authentication**
1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Click on "Google" provider
5. Toggle "Enable"
6. Add your project's support email
7. Click "Save"

### 3. **Register Your Web App**
1. In Firebase project overview, click the web icon (`</>`)
2. Enter your app nickname (e.g., "calorie-tracker-web")
3. Check "Also set up Firebase Hosting" (optional)
4. Click "Register app"
5. Copy the Firebase configuration object

### 4. **Configure Environment Variables**
1. Copy `.env.example` to `.env` in your project root:
   ```bash
   cp .env.example .env
   ```

2. Replace the values in `.env` with your Firebase config:
   ```env
   VITE_FIREBASE_API_KEY=your-actual-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

### 5. **Add Authorized Domains**
1. In Firebase Console, go to Authentication > Settings
2. Scroll down to "Authorized domains"
3. Add your domains:
   - `localhost` (for development)
   - Your production domain (e.g., `your-app.surge.sh`)

## 🎨 **Features Implemented**

### **Login Page**
- Beautiful, responsive design with dark mode support
- Google authentication button
- Feature highlights and branding
- Error handling and loading states

### **Protected Routes**
- All main pages require authentication
- Automatic redirect to login if not authenticated
- Loading spinner during auth state check

### **User Profile**
- User avatar in navigation
- Dropdown menu with user info
- Logout functionality
- Settings access

### **Authentication Context**
- Global auth state management
- Sign in/out functions
- User persistence across sessions

## 🔒 **Security Features**

### **Firebase Security**
- Secure authentication with Google OAuth
- Automatic token refresh
- Session persistence
- HTTPS enforcement

### **Route Protection**
- Protected routes component
- Automatic redirects
- Auth state monitoring

## 🚀 **Usage**

### **Development**
1. Set up your `.env` file with Firebase config
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Navigate to `http://localhost:8080`
4. You'll be redirected to the login page
5. Click "Continue with Google" to authenticate

### **Production Deployment**
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to your hosting platform (Surge, Netlify, etc.)
3. Make sure to add your production domain to Firebase authorized domains

## 🎯 **User Flow**

### **First Visit**
1. User visits the app
2. Redirected to login page
3. Clicks "Continue with Google"
4. Google OAuth popup appears
5. User grants permissions
6. Redirected to main calorie tracker

### **Returning User**
1. User visits the app
2. Automatically signed in (if session valid)
3. Direct access to calorie tracker

### **Logout**
1. User clicks profile avatar
2. Selects "Log out" from dropdown
3. Signed out and redirected to login

## 📱 **Responsive Design**

### **Login Page**
- Mobile-first design
- Two-column layout on desktop
- Feature highlights on left
- Login form on right
- Dark mode support

### **Navigation**
- User avatar in top-right
- Dropdown with user info
- Quick access to settings
- Logout option

## 🔧 **Customization**

### **Styling**
- All components use Tailwind CSS
- Dark mode support throughout
- Consistent with existing design
- Customizable colors and spacing

### **Branding**
- App logo and name in login page
- Feature highlights
- Professional appearance
- Trust indicators (SSL, GDPR)

## 🐛 **Troubleshooting**

### **Common Issues**

1. **"Firebase config not found"**
   - Check your `.env` file exists
   - Verify all environment variables are set
   - Restart development server

2. **"Unauthorized domain"**
   - Add your domain to Firebase authorized domains
   - Include both `localhost` and production domains

3. **"Google sign-in popup blocked"**
   - Allow popups in browser settings
   - Try signing in again

4. **"Authentication failed"**
   - Check Firebase project settings
   - Verify Google provider is enabled
   - Check browser console for errors

### **Development Tips**
- Use browser dev tools to check network requests
- Monitor Firebase console for authentication logs
- Check browser console for JavaScript errors
- Verify environment variables are loaded correctly

## 📚 **Next Steps**

### **Optional Enhancements**
1. **Email Authentication**: Add email/password login option
2. **Profile Management**: Allow users to update profile info
3. **Data Sync**: Sync calorie data across devices
4. **Social Features**: Share progress with friends
5. **Offline Support**: Cache data for offline use

### **Security Improvements**
1. **Security Rules**: Add Firestore security rules
2. **Rate Limiting**: Implement authentication rate limiting
3. **Session Management**: Advanced session controls
4. **Audit Logging**: Track authentication events

Your calorie tracker now has professional-grade authentication! Users can securely sign in with their Google accounts and enjoy a personalized experience.
