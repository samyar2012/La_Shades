import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Choosing the Perfect Curtains for Your Living Room",
      date: "March 15, 2024",
      excerpt: "Learn how to select the ideal curtains that complement your living room's style and provide the right amount of light control.",
      image: "/images/blog/living-room-curtains.jpg",
      category: "Design Tips"
    },
    {
      id: 2,
      title: "The Importance of Regular Curtain Maintenance",
      date: "March 10, 2024",
      excerpt: "Discover why regular maintenance is crucial for keeping your curtains looking beautiful and lasting longer.",
      image: "/images/blog/curtain-maintenance.jpg",
      category: "Maintenance"
    },
    {
      id: 3,
      title: "Latest Trends in Window Treatments for 2024",
      date: "March 5, 2024",
      excerpt: "Explore the newest trends in window treatments and how they can transform your space.",
      image: "/images/blog/window-trends.jpg",
      category: "Trends"
    },
    {
      id: 4,
      title: "How to Measure Windows for Custom Curtains",
      date: "February 28, 2024",
      excerpt: "A comprehensive guide to measuring your windows correctly for custom curtain installation.",
      image: "/images/blog/measuring-windows.jpg",
      category: "How-To"
    }
  ];

  return (
    <div className="blog-page container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post border rounded-lg overflow-hidden shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">{post.date}</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200">
            All Posts
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">
            Design Tips
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">
            Maintenance
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">
            Trends
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">
            How-To
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog; 