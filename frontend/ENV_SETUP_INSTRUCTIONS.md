# Environment Variables Setup for Contact Form

## Required Environment Variable

The contact form requires the following environment variable to send emails:

```
RESEND_API_KEY=your_resend_api_key_here
```

## Local Development Setup

### Step 1: Get Your Resend API Key

1. Create a free account at [https://resend.com](https://resend.com)
2. Verify your email address
3. Navigate to API Keys: [https://resend.com/api-keys](https://resend.com/api-keys)
4. Click "Create API Key"
5. Copy the generated API key

### Step 2: Create Local Environment File

1. In the project root directory (next to `package.json`), create a file named `.env.local`
2. Add the following content:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

3. Replace `re_your_actual_api_key_here` with your actual Resend API key

### Step 3: Test Locally

1. Restart your development server:
   ```bash
   cd frontend
   npm run dev
   ```

2. Navigate to the contact page: `http://localhost:5173/contact`

3. Fill out and submit the form to test email delivery

## Vercel Deployment Setup

### Adding Environment Variables to Vercel

1. Go to your Vercel dashboard: [https://vercel.com/dashboard](https://vercel.com/dashboard)

2. Select your project (CONDUCEFLUIDS)

3. Click on **Settings** tab

4. Navigate to **Environment Variables** section

5. Add a new environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your actual Resend API key (starts with `re_`)
   - **Environment**: Select all (Production, Preview, Development)

6. Click **Save**

7. Redeploy your application:
   - Go to the **Deployments** tab
   - Click the three dots on the latest deployment
   - Select **Redeploy**

## Email Configuration Details

### Current Settings

- **Recipient Email**: conducefluids@gmail.com
- **Sender Email**: onboarding@resend.dev (Resend default)
- **Reply-To**: Customer's email (allows direct reply)

### Using a Custom Domain (Optional)

To send emails from your own domain (e.g., `contacto@conducefluids.com`):

1. Go to Resend dashboard > Domains
2. Click "Add Domain"
3. Enter your domain: `conducefluids.com`
4. Add the provided DNS records to your domain registrar
5. Wait for verification (usually 5-10 minutes)
6. Update the `from` field in `frontend/api/contact.js`:
   ```javascript
   from: 'Conduce Fluids <contacto@conducefluids.com>',
   ```

## Resend Free Tier Limits

- **100 emails per day** (free forever)
- No credit card required
- Perfect for contact forms

## Troubleshooting

### Email Not Sending

1. **Check API Key**: Ensure `RESEND_API_KEY` is set correctly
2. **Check Console**: Look for errors in browser console and server logs
3. **Verify Resend Account**: Make sure your Resend account is active
4. **Check Network**: Ensure `/api/contact` endpoint is accessible

### Testing the API Endpoint

You can test the API endpoint directly using curl:

```bash
curl -X POST http://localhost:5173/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message",
    "interests": ["mangueras", "conexiones"]
  }'
```

## Security Notes

- ⚠️ **Never commit `.env.local`** - It's already in `.gitignore`
- ⚠️ **Never share your API key** publicly
- ⚠️ **Rotate your API key** if accidentally exposed
- ✅ **Use environment variables** for all sensitive data

## Support

If you encounter issues:

1. Check Resend documentation: [https://resend.com/docs](https://resend.com/docs)
2. Review Vercel logs: Dashboard > Deployments > View Function Logs
3. Check browser console for client-side errors

