# Portfolio — Firebase Deployment Guide

## 📁 File Structure

```
portfolio/
├── index.html        # Main HTML (all sections)
├── index.css         # All styles
├── index.js          # All JavaScript
├── firebase.json     # Firebase Hosting config
├── .firebaserc       # Firebase project alias
└── README.md         # This file
```

## 🚀 Deploy to Firebase

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Create a Firebase Project
Go to [console.firebase.google.com](https://console.firebase.google.com), create a new project, then copy the **Project ID**.

### 4. Update `.firebaserc`
Replace `your-firebase-project-id` with your actual Firebase Project ID:
```json
{
  "projects": {
    "default": "YOUR_ACTUAL_PROJECT_ID"
  }
}
```

### 5. Deploy
```bash
firebase deploy
```

Your site will be live at `https://your-project-id.web.app` 🎉

---

## ✏️ Customising the Portfolio

- **Name / Role**: Edit `index.html` — find `Your Name` and update the hero section
- **Typewriter roles**: Edit the `roles` array in `index.js`
- **About text / stats**: Update the `#about` section in `index.html`
- **Experience**: Edit the `.timeline-item` blocks in `index.html`
- **Hobbies**: Edit the `.hobby-card` blocks in `index.html`
- **Projects**: Edit the `.project-card` blocks in `index.html`
- **Contact socials**: Update the links in the `#contact` section
- **Photo**: Replace the `.about-photo-placeholder` div with an `<img>` tag

## 📬 Contact Form (Optional Firebase Integration)

The form currently simulates a submission. To wire it up to Firebase:

1. Add the Firebase SDK to `index.html`:
```html
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore-compat.js"></script>
```

2. Initialise Firebase in `index.js` and replace the `setTimeout` in the form handler with a Firestore write:
```js
const db = firebase.firestore();
await db.collection('messages').add({ name, email, message, timestamp: new Date() });
```
