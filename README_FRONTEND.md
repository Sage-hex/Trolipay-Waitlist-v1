# Frontend Setup

## Environment Variables

Create `.env` from `.env.example` and set values:

```bash
cp .env.example .env
```

```env
VITE_API_BASE_URL=
VITE_WAITLIST_WEBAPP_URL=
```

### Google Sheets Waitlist (Apps Script)

Set `VITE_WAITLIST_WEBAPP_URL` to your deployed Google Apps Script **Web App `/exec` URL**.

Example:

```env
VITE_WAITLIST_WEBAPP_URL=https://script.google.com/macros/s/AKfycb.../exec
```

The waitlist form will send `FormData` to this URL. If missing/unreachable, submissions are stored in localStorage (`waitlist_submissions_v1`) as fallback.
