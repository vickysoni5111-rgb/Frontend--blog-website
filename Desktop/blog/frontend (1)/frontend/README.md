# FilmyCharcha Frontend (Next.js)

Ye frontend tumhare Express backend (`/backend`) se live data leta hai — koi dummy/mock data nahi hai.

## Setup

1. Ye `frontend` folder tumhare `blog` folder ke andar rakho (backend ke bagal me):
```
blog/
├── backend/
└── frontend/
```

2. Terminal me:
```
cd frontend
npm install
npm run dev
```

3. Backend bhi saath me chalao (alag terminal me):
```
cd backend
node server.js
```

4. Browser me kholo: http://localhost:3000

## Zaroori: backend me ek chhota fix

`controllers/commentController.js` me `getAllComments` ko is se replace karo (taaki post-wise comment filter kaam kare):

```js
exports.getAllComments = async (req, res) => {
  try {
    const filter = {};
    if (req.query.post) filter.post = req.query.post;
    const comments = await Comment.find(filter)
      .populate("post", "title slug")
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
```

`controllers/postController.js` me `getGallery` ke `.select(...)` me `"slug"` add kar do:

```js
.select("title slug featuredImage featuredImageAlt category createdAt")
```

## Folder Structure

- `src/app/page.jsx` — Homepage (latest posts + top news sidebar)
- `src/app/[slug]/page.jsx` — Single post page (SEO meta, TOC, FAQ, comments)
- `src/app/category/[category]/page.jsx` — Sports/Hollywood/Bollywood/Webseries-OTT
- `src/app/gallery/page.jsx` — Gallery grid
- `src/app/top-news/page.jsx` — Top news listing
- `src/components/` — Header, Footer, PostCard, TopNewsSidebar, BreakingNewsBar, CommentSection, TOC
- `src/lib/api.js` — Saari backend API calls ek jagah

## Environment

`.env.local` me backend ka URL hai:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
Production me deploy karte waqt sirf ye line change karni hogi.
