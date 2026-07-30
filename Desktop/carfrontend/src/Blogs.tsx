import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  BookOpen, 
  Share2,
  Clock
} from 'lucide-react';

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Travel Tips', 'Cab Booking', 'City Guides', 'Safety', 'Offers'];

  // Blog Posts Data
  const blogsList = [
    {
      id: 1,
      title: "Top 10 Scenic Highway Routes in India You Must Explore by Cab",
      category: "Travel Tips",
      image: "src/assets/backgroundpic.png",
      fallbackImg: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      date: "May 12, 2026",
      readTime: "5 min read",
      author: "Rahul Sharma",
      excerpt: "Discover the breathtaking mountain passes and coastal highways that are best enjoyed with a comfortable, verified outstation cab rental."
    },
    {
      id: 2,
      title: "Why Verified Cab Partners Matter for Safe Family Outstation Trips",
      category: "Safety",
      image: "src/assets/car2.png",
      fallbackImg: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      date: "May 8, 2026",
      readTime: "4 min read",
      author: "Priya Verma",
      excerpt: "Learn how BookCabNow ensures background-checked drivers, sanitized fleets, and transparent pricing for your family's absolute peace of mind."
    },
    {
      id: 3,
      title: "Mumbai City Guide: Navigating Traffic and Sightseeing Like a Pro",
      category: "City Guides",
      image: "src/assets/mumbai.png",
      fallbackImg: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
      date: "April 29, 2026",
      readTime: "6 min read",
      author: "Vikramaditya",
      excerpt: "From Marine Drive sunset views to local street food spots, here is how you can hire a local rental cab to experience Mumbai seamlessly."
    },
    {
      id: 4,
      title: "How to Save Money on Your Next Airport Transfer Booking",
      category: "Cab Booking",
      image: "src/assets/car.png",
      fallbackImg: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      date: "April 22, 2026",
      readTime: "3 min read",
      author: "Sneha Patel",
      excerpt: "Avoid surge pricing and last-minute airport hassles with these clever booking tips and early-bird promotional discount codes."
    },
    {
      id: 5,
      title: "The Rise of Electric Cabs: Green Travel in Modern Indian Cities",
      category: "Travel Tips",
      image: "src/assets/carpic.png",
      fallbackImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      date: "April 15, 2026",
      readTime: "5 min read",
      author: "Amitabh Roy",
      excerpt: "Explore how eco-friendly EV cabs are transforming urban commuting, reducing carbon footprints without compromising comfort."
    },
    {
      id: 6,
      title: "Monsoon Travel Guide: Best Weekend Getaways Near Mumbai & Pune",
      category: "City Guides",
      image: "src/assets/background1.png",
      fallbackImg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      date: "April 10, 2026",
      readTime: "7 min read",
      author: "Neha Kulkarni",
      excerpt: "Lush green hills, roaring waterfalls, and misty roads await you. Book a dependable highway cab for your rainy season adventure."
    }
  ];

  // Filter blogs based on category & search query
  const filteredBlogs = blogsList.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/backgroundpic.png" 
            alt="Travel Blog Banner" 
            className="w-full h-full object-cover object-center brightness-75"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-[#F8FAFC]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-6">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md shadow-sm">
            <BookOpen className="w-3.5 h-3.5" /> BookCabNow Insights & Stories
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            Travel stories, guides & <span className="text-amber-400">expert tips.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto drop-shadow">
            Explore insightful articles about road trips, verified cab services, travel safety, and top destination guides.
          </p>
        </div>
      </section>

      {/* ---------------- 2. SEARCH & CATEGORIES BAR ---------------- */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 pb-10">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/60 border border-slate-100 p-6 sm:p-8 backdrop-blur-xl">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Categories Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === cat 
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- 3. BLOG CARDS GRID SECTION ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest Articles
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Handcrafted guides and updates for smart travelers.
            </p>
          </div>
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
            {filteredBlogs.length} Posts Found
          </span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-2">No articles found</h3>
            <p className="text-slate-500 text-sm">Try searching with a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog.id}
                className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-300/60 group"
              >
                {/* Blog Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = blog.fallbackImg;
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                    {blog.category}
                  </span>
                </div>

                {/* Blog Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Footer / Author */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <User className="w-3.5 h-3.5 text-blue-600" /> {blog.author}
                    </span>

                    <button className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* ---------------- 4. NEWSLETTER / SUBSCRIBE BANNER ---------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold tracking-widest uppercase mb-4">
              Stay Updated
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Get travel tips & exclusive offers directly in your inbox.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-6">
              No spam ever. Just high-quality road trip guides, discount codes, and cab booking updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address..."
                className="bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl transition-all shadow-lg text-sm">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Blogs;