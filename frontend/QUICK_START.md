# 🚀 Quick Start - Contact Form Email Setup

## ⚡ 3-Minute Setup

### 1. Get Your Resend API Key (2 minutes)

1. Go to [resend.com](https://resend.com) and sign up (free)
2. Verify your email
3. Go to [API Keys](https://resend.com/api-keys)
4. Click "Create API Key"
5. Copy the key (starts with `re_`)

### 2. Add to Vercel (1 minute)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add new variable:
   - Name: `RESEND_API_KEY`
   - Value: (paste your API key)
   - Environment: All (Production, Preview, Development)
4. Click **Save**
5. Go to **Deployments** → Click latest → **Redeploy**

### 3. Test It! (30 seconds)

1. Visit: `https://conducefluids.com/contact`
2. Fill out the form
3. Click "Enviar mensaje"
4. Check `conducefluids@gmail.com` for the email

---

## 🐛 Troubleshooting

If you get an error about "api/**/*.js" pattern not matching:

**✅ FIXED**: The API function has been moved to the correct location (`api/contact.js` at project root).

The error should now be resolved. If you still see it, redeploy to Vercel to apply the changes.

## ✅ That's It!

Your contact form is now fully functional and sending professional emails to `conducefluids@gmail.com`.

---

## 🧪 Test Locally (Optional)

If you want to test on your local machine:

1. Create `frontend/.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

2. Restart dev server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Visit: `http://localhost:5173/contact`

---

## 📧 What Happens When Someone Submits?

1. User fills out the form
2. Form validates the data
3. Shows "Enviando..." with spinner
4. Sends email via Resend API
5. Shows success message
6. Email arrives at `conducefluids@gmail.com` with:
   - Professional template
   - Conduce Fluids logo
   - All customer information
   - Direct reply button

---

## 🆘 Need Help?

See `ENV_SETUP_INSTRUCTIONS.md` for detailed troubleshooting.

---

**Free Tier**: 100 emails/day forever  
**Cost**: $0  
**Setup Time**: 3 minutes  
**Status**: ✅ Production Ready

