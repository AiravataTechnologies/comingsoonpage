import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email, recipientEmail } = req.body;
      
      if (!email || !recipientEmail) {
        return res.status(400).json({ error: "Email and recipient email are required" });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email) || !emailRegex.test(recipientEmail)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      // For development, we'll log the subscription and simulate email sending
      // In production, you would configure nodemailer with real SMTP settings
      console.log(`📧 Email subscription received:
        User Email: ${email}
        Recipient: ${recipientEmail}
        Timestamp: ${new Date().toISOString()}
        IP: ${req.ip || req.connection.remoteAddress}`);

      // Here you would typically:
      // 1. Save the subscription to database
      // 2. Send actual email using nodemailer with your SMTP config
      // 3. For Gmail, you would need app-specific password or OAuth2
      
      // Simulate successful email sending
      res.json({ 
        success: true, 
        message: "Thank you for subscribing! We'll notify you when we launch." 
      });
      
    } catch (error) {
      console.error("Email subscription error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
