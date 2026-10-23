# DarPaws blog — how to publish an article

1. Create a Markdown file in `fr/`, `en/` and/or `ar/`.
   The file name becomes the URL: `fr/vacciner-son-chat.md` → `/blog/vacciner-son-chat`,
   `en/vacciner-son-chat.md` → `/en/blog/vacciner-son-chat`.
   Use lowercase letters, numbers and dashes. Use the **same file name** in each language folder
   for the translations of one article (the language switch then links them together).
2. Start the file with this header (keep the quotes):

   ```
   ---
   title: "Le titre de l'article"
   description: "Une phrase pour Google et le partage sur WhatsApp/Facebook"
   date: 2026-11-05
   emoji: "🐱"          # big picture on the card and at the top of the article
   draft: false        # true = hidden until you are ready
   ---
   ```
3. Write the article in Markdown: `## Title`, `**bold**`, `- list`, `> tip`.
4. Commit and push to `main`. Render rebuilds the site and the article is online in ~1 minute
   (home page "Blog" section, the blog list, and the sitemap).
