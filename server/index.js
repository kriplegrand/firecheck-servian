
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');

admin.initializeApp({ credential: admin.credential.applicationDefault() });
const db = getFirestore();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('FireCheck API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
