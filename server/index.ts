import 'dotenv/config';                                                     import express from "express";
import session from "express-session";
import MemoryStore from "memorystore";
import cors from "cors";
import { db, pool } from "./db";
import { subdomainRouter } from "./subdomain-router"; // Assurez-vous que ce fichier existe ou commentez cette ligne
// import { registerRoutes } from "./routes"; // Commenté pour l'instant si le fichier manque
// import { setupVite, serveStatic, log } from "./vite"; // Commenté pour l'instant

const app = express();
const isProduction = process.env.NODE_ENV === "production";

app.set('trust proxy', 1);
app.use(cors({ origin: isProduction ? false : true, credentials: true }));

// Session
const MemoryStoreConstructor = MemoryStore(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET || "ced-halaltech-dev-secret-2025",
    resave: false,
    saveUninitialized: false,
    store: new MemoryStoreConstructor({ checkPeriod: 86400000 }),
    cookie: {
      maxAge: 30 * 60 * 1000,
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
    },
  })
);

// Route de test
app.get("/", (req, res) => {
  res.send("Serveur Euria Hub actif. Base de données connectée.");
});

app.get("/api/health", async (req, res) => {
  try {
    // Test rapide de la DB
    // await db.select().from(schema.users).limit(1); 
    res.json({ status: "ok", db: "connected" });
  } catch (e) {
    res.status(500).json({ status: "error", message: "DB connection failed" });
  }
});

// Gestion des erreurs
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Démarrage
const port = parseInt(process.env.PORT || "5000", 10);
app.listen(port, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

// Nettoyage propre
process.on("SIGINT", async () => {
  await pool.end();
  process.exit(0);
});
