
# GitHub Stars – React App

This is a responsive React web app that lists the **most starred GitHub repositories** created in the last 10 days.

---

## 📁 Project Structure

```
src/
├── api/
│   └── apiController.js          # Fetch GitHub repositories
├── components/
│   ├── BottomNavBar.jsx          # Fixed bottom navigation
│   ├── paginationConfig.jsx      # Logic for dynamic pagination with ellipsis and chevrons
│   ├── RepoItem.jsx              # Single repository card
│   └── ReposListResult.jsx       # List container for repo results
├── App.jsx                       # Main component with state and layout
├── main.jsx                      # App entry point
├── style.css                     # All styling grouped with comments
```

---

## 🔍 Features

- List most starred GitHub repos created in the last 10 days
- Responsive layout with clean UI
- Dynamic pagination with chevrons and ellipsis
- Scrollable result box
- Bottom navigation bar (Trending / Settings)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm

### Setup Instructions

```bash
git clone <your-repo-url>
cd github-stars
npm install
npm run dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)

---

## 📦 GitHub API Reference

```http
GET https://api.github.com/search/repositories?q=created:>YYYY-MM-DD&sort=stars&order=desc&page=N
```
> The date is dynamically calculated to be 10 days before today.

## 📄 License

This project is for Etiqa coding assessment.
