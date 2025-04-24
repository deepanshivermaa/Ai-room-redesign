import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/config/schema.js", // Ensure the correct file extension
  dialect: "postgresql",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_n9iqXSdVh0Hc@ep-blue-bar-a5rz9l9o-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
  },
});
