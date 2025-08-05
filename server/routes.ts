import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

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
      
      // Log the subscription
      console.log(`📧 Email subscription received:
        User Email: ${email}
        Recipient: ${recipientEmail}
        Timestamp: ${new Date().toISOString()}
        IP: ${req.ip || req.connection.remoteAddress}`);

      // For now, simulate successful email sending
      // To enable real Gmail sending, configure the transporter below with your credentials
      
      /*
      // Uncomment and configure this section with your Gmail credentials:
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER || 'your-email@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
        }
      });

      const mailOptions = {
        from: '"Coming Soon Page" <noreply@comingsoon.app>',
        to: recipientEmail,
        subject: 'New Email Subscription from Coming Soon Page',
        html: `
          <h2>New Email Subscription</h2>
          <p>A new user has subscribed for notifications:</p>
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
            <li><strong>IP Address:</strong> ${req.ip || req.connection.remoteAddress}</li>
          </ul>
          <p>Thank you for your interest in our upcoming launch!</p>
        `
      };

      await transporter.sendMail(mailOptions);
      */
      
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
