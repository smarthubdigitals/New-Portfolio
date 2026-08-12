import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory store for contact form submissions
  const receivedMessages: Array<{
    id: string;
    fullName: string;
    email?: string;
    phoneWhatsapp: string;
    businessName?: string;
    serviceNeeded: string;
    projectDetails: string;
    receivedAt: string;
  }> = [];

  // Health check API route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Get all received messages API endpoint
  app.get("/api/messages", (req, res) => {
    res.json({
      success: true,
      count: receivedMessages.length,
      messages: receivedMessages,
    });
  });

  // Contact Form Submission Endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { fullName, email, phoneWhatsapp, businessName, serviceNeeded, projectDetails, honeypot } = req.body;

      // Spam honeypot trap
      if (honeypot && honeypot.trim() !== "") {
        return res.status(200).json({ 
          success: true, 
          message: "Thank you for reaching out! Your message has been received." 
        });
      }

      // Basic Validation
      if (!fullName || !phoneWhatsapp || !serviceNeeded || !projectDetails) {
        return res.status(400).json({ 
          success: false, 
          error: "Please complete all required fields (Name, Phone/WhatsApp, Service, and Details)." 
        });
      }

      // Allowed services verification
      const validServices = [
        "Social Media Graphics & Promotional Flyers",
        "Short-Form Video & AI Content",
        "Business Website Design"
      ];

      if (!validServices.includes(serviceNeeded)) {
        return res.status(400).json({ 
          success: false, 
          error: "Please select one of the three offered digital services." 
        });
      }

      const newMsg = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        fullName: String(fullName).trim(),
        email: email ? String(email).trim() : undefined,
        phoneWhatsapp: String(phoneWhatsapp).trim(),
        businessName: businessName ? String(businessName).trim() : undefined,
        serviceNeeded: String(serviceNeeded).trim(),
        projectDetails: String(projectDetails).trim(),
        receivedAt: new Date().toISOString()
      };

      receivedMessages.unshift(newMsg);

      console.log("=== NEW PROJECT INQUIRY FOR ABDUL WAHEED ===");
      console.log(`From: ${newMsg.fullName} (${newMsg.email || 'No email provided'})`);
      console.log(`WhatsApp/Phone: ${newMsg.phoneWhatsapp}`);
      console.log(`Business Name: ${newMsg.businessName || 'N/A'}`);
      console.log(`Service Requested: ${newMsg.serviceNeeded}`);
      console.log(`Project Details: ${newMsg.projectDetails}`);
      console.log("============================================");

      return res.status(200).json({
        success: true,
        message: `Thank you, ${fullName}! Your project request for "${serviceNeeded}" has been logged successfully. Abdul Waheed will review your details and contact you via WhatsApp (${phoneWhatsapp}) or email shortly.`,
        data: newMsg
      });
    } catch (error: any) {
      console.error("Error handling contact API:", error);
      return res.status(500).json({ 
        success: false, 
        error: "An error occurred while submitting your message. Please try contacting Abdul via WhatsApp directly." 
      });
    }
  });

  // Vite middleware for development vs Static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Abdul Waheed Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
